export interface IUser {
    Id: number;
    UserName: string;
    Password: string;
    Email:string;
}
export interface LaptopList
{
    Resource_Id:number;
    Resource_Name:string;
    Availability:number;
}
export interface MobileList
{
    Resource_Id:number;
    Resource_Name:string;
    Availability:number;
}
export interface Available
{
     UserName:string;
     Resource_Id:number;
     Start_Date:Date;
     End_Date:Date;
}
export interface Book
{
    UserName:string;
    Resource_Id:number;
    Start_Date:Date;
    End_Date:Date;
}