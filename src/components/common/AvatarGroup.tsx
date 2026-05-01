import React from 'react'
import UserProfile from './UserProfile';
import building from "@/public/icons/user1.svg"

interface UserInfo {
    id: number;
    role: string;
    email: string;
    fullName: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailVerified: boolean;
    membershipDate: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
}

const userPic = [
    {fullName: "1", userPic: building},
    {fullName: "2", userPic: building},
    {fullName: "3", userPic: building},
    {fullName: "4", userPic: building},
]

// const getUser = async (): Promise<UserInfo[]> => {
//    const res = await fetch( 
//         "http://next.genzuni.website/api/users"
//     );
//     if(!res.ok) {
//         throw new Error("failed to fetch users");
//     }
//     return res.json();
// }

const AvatarGroup = async () => {
    // const users = await getUser();
    // console.log("users information", users)
  return (
    <div className='flex justify-end'>
      {userPic.map((user) => {
        return (
            <div key={user.fullName} className='relative'>
                <UserProfile imageSrc={user.userPic}/>
            </div>
        )
      })}
    </div>
  )
}

export default AvatarGroup
