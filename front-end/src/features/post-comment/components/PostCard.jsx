import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { calculateAge, capitalizeGender, getMoment } from '@/utils/helper';
  import { User } from 'lucide-react';
  //import CommentButton from './CommentButton';
  
  export default function PostCard({ post }) {
    return (
      <Card className="flex flex-col justify-between h-[255px] max-w-[385px]">
        <CardHeader>
          <CardTitle className="flex gap-4 h-fit items-center">
            <User size="40px" />
            <div className="flex flex-col">
              <div>
                {capitalizeGender(post['User'].gender)}
                {calculateAge(post['User'].date_of_birth)}
              </div>
              <div className="text-sm text-gray-500">
                {getMoment(post['createdAt'])}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="line-clamp-3">{post.content}</div>
        </CardContent>
        <CardFooter className="flex items-center border-t-2 border-slate-500 border-solid">
        </CardFooter>
      </Card>
    );
  }
  