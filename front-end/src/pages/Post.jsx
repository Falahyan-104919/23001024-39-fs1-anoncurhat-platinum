import {
  PostHeader,
  PostFooter,
  PostTitle,
  PostContent,
  } from '@/components/ui/post';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { User } from 'lucide-react';
import { calculateAge, capitalizeGender, getMoment } from '@/utils/helper';


//export default function Post() {
  //  const { id }  = useParams ();
    //const {isLoading, data} = useMutation ();
  //return (

  //<div className="bg-black justify-center h-[1200px]">
  //<div className="flex justify-center h-screen pt-20">
  //<div className="bg-black bg-opacity-90 pt-10 pl-10 h-[800px] w-[1400px] ">
  //<div className="flex ">
  //<User size="40px" />
  //<div className="flex flex-col">
  //</div>
  //<div className="flex items-center ml-4"> {/* Adjust the margin as needed */}
  //<span className="text-black">Username</span>
  //</div>

  //</div>
  //<div className="mt-2 p-5 ">
  //<textarea
  //className="w-full h-20 border rounded p-2 h-[200px]"
  //placeholder="Write your comment..."
  ///>
  //</div>
  //<div className="flex pl-20 pt-10 ">
  //<User size="40px" />
  //<div className="flex flex-col">
  //</div>
  //<div className="flex items-center ml-4"> {/* Adjust the margin as needed */}
  //<span className="text-black">Commentator</span>
  //</div>
  //</div>
  //<div className="mt-2 pl-20 pt-5 pr-5 ">
  //<textarea
  //className="w-full border rounded p-2 h-[100px]"
  //placeholder="Write your comment..."
  ///>
  //</div>
  //</div>
  //</div>

  //</div>

  //)
//}