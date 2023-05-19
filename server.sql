Ghi Chú
Thiết Kế Web
My CV
Liên Hệ
Học Viên Tích Cực
Test Lý Thuyết
Đăng Nhập
Tìm kiếm

Trang Chủ
Khóa Học Online
Lập Trình C
Frontend
Backend
Java
Khác
×





☰
Trang ChủSQL Server/MySQL[Share Code] Thiết kế hệ quản trị CSDL - Quản lý sinh viên (create, alter, update, insert, select) - Lập trình SQL Server
[Share Code] Thiết kế hệ quản trị CSDL - Quản lý sinh viên (create, alter, update, insert, select) - Lập trình SQL Server 
by GokiSoft.com - 21:13 13/08/2020
7,004 Lượt Xem
Short URL: https://gokisoft.com/1794





Ẩn Code  Copy Code
-- Muc 1
-- Tao CSDL
create database StudentManagementSystem
go

-- Active Database
use StudentManagementSystem
go

-- Muc 2 => Tao Tables
--- Tao Class Table
create table Class (
	ClassId int not null,
	ClassCode nvarchar(50)
)
go

--- Tao Student Class
create table Student (
	StudentId int not null,
	StudentName nvarchar(50),
	BirthDate datetime,
	ClassId int
)

--- Tao Subject
create table Subject (
	SubjectId int not null,
	SubjectName nvarchar(100),
	SessionCount int
)

--- Tao bang quan ly diem thi : Result
create table Result (
	SubjectId int not null,
	StudentId int not null,
	Mark int
)
go

alter table Result
alter column Mark float

-- Muc 3 : Tao constraint -> Primary Key & Foreign Key
alter table Class
add constraint PK_Class primary key (ClassId)

alter table Student
add constraint PK_Student primary key (StudentId)

alter table Subject
add constraint PK_Subject primary key (SubjectId)

alter table Result
add constraint PK_Result primary key (SubjectId, StudentId)

alter table Student
add constraint FK_Student_Class foreign key (ClassId) references Class (ClassId)

alter table Result
add constraint FK_Result_Student foreign key (StudentId) references Student (StudentId)

alter table Result
add constraint FK_Result_Subject foreign key (SubjectId) references Subject (SubjectId)

---CHECK
alter table Subject
add constraint CH_Subject_SessionCount check (SessionCount > 0)

-- Muc 4: Insert Data
insert into Class(ClassId, ClassCode)
values
(1, 'C1106KV'),
(2, 'C1107KV'),
(3, 'C1108KV'),
(4, 'C1109KV'),
(5, 'C1110KV')

insert into Student(StudentId, StudentName, BirthDate, ClassId)
values
(1, 'Pham Tuan Anh', '1993-08-05', 1),
(2, 'Phan Van Huy', '1992-06-10', 1),
(3, 'Nguyen Hoang Minh', '1992-08-05', 2),
(4, 'Tran Tuan Tu', '1993-10-10', 2),
(5, 'Do Anh Tai', '1992-06-06', 3)

insert into Subject (SubjectId, SubjectName, SessionCount)
values
(1, 'C Programming', 22),
(2, 'Web Design', 18),
(3, 'Database Management', 23)

insert into Result (StudentId, SubjectId, Mark)
values
(1, 1, 8),
(1, 2, 7),
(2, 3, 5),
(3, 2, 6),
(4, 3, 9),
(5, 2, 8)

select * from Class
select * from Student
select * from Subject
select * from Result

--- Muc 5 : Query
select StudentId 'Ma Sinh Vien', StudentName 'Ten Sinh Vien', BirthDate 'Ngay Sinh'
from Student
where BirthDate between '1992-10-10' and '1993-10-10'

--- Dem sinh vien trong lop -> inner join
select Class.ClassId, Class.ClassCode, COUNT(Student.StudentId) TotalStudent
from Class, Student
where Class.ClassId = Student.ClassId
group by Class.ClassId, Class.ClassCode

--> Tuong tu code sau
select Class.ClassId, Class.ClassCode, COUNT(Student.StudentId) TotalStudent
from Class inner join Student on Class.ClassId = Student.ClassId
group by Class.ClassId, Class.ClassCode

-- Su dung left join => hien thi tat ca ban ghi trong Class
select Class.ClassId, Class.ClassCode, COUNT(Student.StudentId) TotalStudent
from Class left join Student on Class.ClassId = Student.ClassId
group by Class.ClassId, Class.ClassCode

--- Hien thi tong diem cua sinh vien
select Student.StudentId 'Ma Sinh Vien', Student.StudentName 'Ten Sinh Vien', SUM(Result.Mark) TotalMark
from Student left join Result on Student.StudentId = Result.StudentId
group by Student.StudentId, Student.StudentName
having SUM(Result.Mark) > 10
order by TotalMark desc



Thiết kế hệ quản trị CSDL - Quản lý sinh viên (create, alter, update, insert, select) - Lập trình SQL Server
ỨNG DỤNG HỌC


