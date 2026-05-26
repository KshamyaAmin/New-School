from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    email: EmailStr
    role: str = "teacher"

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: str | None = None

class StudentBase(BaseModel):
    name: str
    student_class: str
    teacher_email: EmailStr

class StudentResponse(StudentBase):
    id: int

    class Config:
        from_attributes = True

class DashboardResponse(BaseModel):
    total_students: int
    total_teachers: int | None = None
    attendance: str | None = None
    assigned_students: int | None = None
