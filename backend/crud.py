from sqlalchemy.orm import Session
import models, schemas
import auth

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = auth.get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password, role=user.role)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_all_teachers(db: Session):
    return db.query(models.User).filter(models.User.role == "teacher").all()

def count_teachers(db: Session):
    return db.query(models.User).filter(models.User.role == "teacher").count()

def get_all_students(db: Session):
    return db.query(models.Student).all()

def get_students_for_teacher(db: Session, teacher_email: str):
    return db.query(models.Student).filter(models.Student.teacher_email == teacher_email).all()

def count_students(db: Session):
    return db.query(models.Student).count()

def count_students_for_teacher(db: Session, teacher_email: str):
    return db.query(models.Student).filter(models.Student.teacher_email == teacher_email).count()

def create_student(db: Session, student: schemas.StudentBase):
    db_student = models.Student(
        name=student.name,
        student_class=student.student_class,
        teacher_email=student.teacher_email
    )
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student
