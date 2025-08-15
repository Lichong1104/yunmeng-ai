import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teacher from "@/assets/teacher.png";
import studentBoy from "@/assets/student-boy.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import teacherMale1 from "@/assets/teacher-male-1.jpg";
import teacherFemale1 from "@/assets/teacher-female-1.jpg";
import teacherMale2 from "@/assets/teacher-male-2.jpg";
import teacherMale3 from "@/assets/teacher-male-3.jpg";
import teacherFemale2 from "@/assets/teacher-female-2.jpg";
import teacherMale4 from "@/assets/teacher-male-4.jpg";
import teacherMale5 from "@/assets/teacher-male-5.jpg";

const AccessSection = () => {
  const teachers = [
    {
      id: 1,
      name: "谢作如",
      school: "北京市第四中学",
      avatar: teacherMale1
    },
    {
      id: 2,
      name: "金鑫",
      school: "上海市华东师范大学第二附属中学",
      avatar: teacherFemale1
    },
    {
      id: 3,
      name: "赵克己",
      school: "深圳中学",
      avatar: teacherMale2
    },
    {
      id: 4,
      name: "祁荣亮",
      school: "杭州第二中学",
      avatar: teacherMale3
    },
    {
      id: 5,
      name: "王龙静",
      school: "南京师范大学附属中学",
      avatar: teacherFemale2
    },
    {
      id: 6,
      name: "于方军",
      school: "成都市第七中学",
      avatar: teacherMale4
    },
    {
      id: 7,
      name: "管雪观",
      school: "西安市铁一中学",
      avatar: teacherMale5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Teacher Version */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group animate-slide-up">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <img
                  src={teacher}
                  alt="Teacher"
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">教师版</h3>
                <p className="text-gray-600 leading-relaxed">
                  为教师提供完整的教学工具和资源，助力AI教育教学
                </p>
              </div>
              <Button variant="hero" size="lg" className="w-full group">
                点击进入
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Student Version */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <img
                  src={studentBoy}
                  alt="Student"
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">学生版</h3>
                <p className="text-gray-600 leading-relaxed">
                  专为学生设计的互动学习平台，让AI学习变得简单有趣
                </p>
              </div>
              <Button variant="hero" size="lg" className="w-full group">
                点击进入
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Teacher Showcase Carousel */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">优秀教师风采</h2>
            <p className="text-gray-600 text-lg">来自全国各地的优秀AI教育践行者</p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {teachers.map((teacher) => (
                <CarouselItem key={teacher.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="bg-white rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <Avatar className="w-20 h-20 border-4 border-purple-200">
                          <AvatarImage src={teacher.avatar} alt={teacher.name} />
                          <AvatarFallback className="bg-gradient-to-br from-purple-200 to-pink-200 text-purple-700 font-semibold text-lg">
                            {teacher.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{teacher.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{teacher.school}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;