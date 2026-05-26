from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
import crud, schemas, auth
from database import get_db

router = APIRouter()

@router.get("/students", response_model=list[schemas.StudentResponse])
def get_students(current_user: schemas.UserResponse = Depends(auth.get_current_user), db: Session = Depends(get_db)):
    if current_user.role == "admin":
        return crud.get_all_students(db)
    return crud.get_students_for_teacher(db, current_user.email)

@router.get("/teachers", response_model=list[schemas.UserResponse])
def get_teachers(current_user: schemas.UserResponse = Depends(auth.get_current_user), db: Session = Depends(get_db)):
    if current_user.role != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Admins only")
    return crud.get_all_teachers(db)

@router.get("/dashboard", response_model=schemas.DashboardResponse)
def get_dashboard(current_user: schemas.UserResponse = Depends(auth.get_current_user), db: Session = Depends(get_db)):
    if current_user.role == "admin":
        return schemas.DashboardResponse(
            total_students=crud.count_students(db),
            total_teachers=crud.count_teachers(db),
            attendance="92%"
        )

    return schemas.DashboardResponse(
        total_students=crud.count_students_for_teacher(db, current_user.email),
        assigned_students=crud.count_students_for_teacher(db, current_user.email),
        attendance="94%"
    )
