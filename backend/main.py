from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base, SessionLocal
from routers import auth_router, data_router
import crud, schemas, models

Base.metadata.create_all(bind=engine)

app = FastAPI(title="School API")

# Configure CORS
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router.router, prefix="/api/auth", tags=["auth"])
app.include_router(data_router.router, prefix="/api/data", tags=["data"])


def create_seed_user(db, email, password, role):
    existing = crud.get_user_by_email(db, email=email)
    if not existing:
        crud.create_user(db=db, user=schemas.UserCreate(email=email, password=password, role=role))


def create_seed_student(db, student):
    existing = db.query(models.Student).filter_by(name=student["name"], teacher_email=student["teacher_email"]).first()
    if existing:
        return
    crud.create_student(db=db, student=schemas.StudentBase(**student))


def seed_data():
    db = SessionLocal()
    try:
        create_seed_user(db, "admin@school.com", "Admin@1234", "admin")
        create_seed_user(db, "tanya.kumar@school.com", "Teacher@123", "teacher")
        create_seed_user(db, "arjun.mehta@school.com", "Teacher@123", "teacher")
        create_seed_user(db, "neha.patel@school.com", "Teacher@123", "teacher")
        create_seed_user(db, "ravi.bose@school.com", "Teacher@123", "teacher")

        students = [
            {"name": "Riya Sharma", "student_class": "5-A", "teacher_email": "tanya.kumar@school.com"},
            {"name": "Aditya Singh", "student_class": "5-A", "teacher_email": "tanya.kumar@school.com"},
            {"name": "Meera Iyer", "student_class": "6-B", "teacher_email": "arjun.mehta@school.com"},
            {"name": "Karan Joshi", "student_class": "6-B", "teacher_email": "arjun.mehta@school.com"},
            {"name": "Nisha Rao", "student_class": "7-C", "teacher_email": "neha.patel@school.com"},
            {"name": "Deepak Yadav", "student_class": "7-C", "teacher_email": "neha.patel@school.com"},
            {"name": "Simran Kaur", "student_class": "8-D", "teacher_email": "ravi.bose@school.com"},
            {"name": "Arjun Reddy", "student_class": "8-D", "teacher_email": "ravi.bose@school.com"},
        ]

        for student in students:
            create_seed_student(db, student)
    finally:
        db.close()


seed_data()

@app.get("/")
def read_root():
    return {"message": "Welcome to the School API"}
