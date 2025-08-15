import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Play, Star, Home, Palette, Settings, Video, Image, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoCreation = () => {
  const navigate = useNavigate();
  const sidebarItems = [
    { icon: Home, label: "首页", active: true, path: "/video-creation" },
    { icon: Palette, label: "创作素材", path: "/creative-materials" },
    { icon: Settings, label: "单元功能", path: "/video-settings" },
    { icon: Image, label: "文生图片", path: "/text-to-image" },
    { icon: Video, label: "图生视频", path: "/image-to-video" },
    { icon: Video, label: "文生视频", path: "/text-to-video" },
    { icon: Mic, label: "口播", path: "/voice-broadcast" },
    { icon: Settings, label: "系统管理", path: "/system-management" }
  ];

  const recentProjects = [
    { title: "开始创作", type: "create", isEmpty: true },
    { title: "文生图片", subtitle: "基于手册编写的文档", type: "image" },
    { title: "图生视频", subtitle: "图片素材编辑", type: "video" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">YM</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">云梦科技</h1>
                <p className="text-xs text-gray-500">CLOUD DREAM</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              0 ⬇ 导入
            </Button>
          </div>
        </div>
        
        {/* Platform Title */}
        <div className="text-center py-6">
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 bg-white/80 backdrop-blur-sm h-screen sticky top-0 shadow-sm">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => item.path && navigate(item.path)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  item.active 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
          
          {/* AI Assistant */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-gray-800 rounded-full p-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-800">AI</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-8">
          {/* Top Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-400 to-blue-600 text-white border-0 relative overflow-hidden">
              <div className="absolute top-2 left-2">
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>AI视频</span>
                  <Star className="w-4 h-4" />
                </CardTitle>
                <p className="text-blue-100 text-sm">将创意转化为生动的视频</p>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="mb-4"
                  onClick={() => navigate('/text-to-video')}
                >
                  立即创建
                </Button>
                <div className="w-full h-32 bg-white/20 rounded-lg overflow-hidden relative group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop&crop=center" 
                    alt="Animated Character Video Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-600 to-gray-800 text-white border-0 relative overflow-hidden">
              <div className="absolute top-2 left-2">
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>工作流</span>
                  <Star className="w-4 h-4" />
                </CardTitle>
                <p className="text-gray-300 text-sm">制作从脚本到制作的过程</p>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" size="sm" className="mb-4">
                  开始制作
                </Button>
                <div className="w-full h-32 bg-white/20 rounded-lg overflow-hidden relative group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop&crop=center" 
                    alt="Cartoon Character Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Creation Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 px-4 py-2 rounded-full">
                <h3 className="text-white font-semibold">近期制作</h3>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-200 rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentProjects.map((project, index) => (
                <Card key={index} className="relative bg-white/80 backdrop-blur-sm border-2 border-dashed border-blue-300 hover:border-blue-400 transition-colors group">
                  <div className="absolute top-2 right-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <CardContent className="p-6">
                    {project.isEmpty ? (
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto group-hover:bg-gray-300 transition-colors">
                          <Plus className="w-8 h-8 text-gray-400" />
                        </div>
                        <h4 className="font-semibold text-gray-700">{project.title}</h4>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden relative group cursor-pointer">
                          <img 
                            src={project.type === 'image' 
                              ? "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=400&h=300&fit=crop&crop=center"
                              : "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop&crop=center"
                            }
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{project.title}</h4>
                          <p className="text-sm text-gray-600">{project.subtitle}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Videos Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 px-4 py-2 rounded-full">
                <h3 className="text-white font-semibold">热门视频</h3>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-200 rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-blue-300 relative">
                  <div className="absolute top-2 right-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <CardContent className="p-4">
                    <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden relative group cursor-pointer">
                      <img 
                        src={`https://images.unsplash.com/photo-${
                          item === 1 ? '1578662996442-48f60103fc96' :
                          item === 2 ? '1505142468610-359e7d316be0' :
                          item === 3 ? '1419242902214-272b3f66ee7a' :
                          '1506905925346-21bda4d32df4'
                        }?w=400&h=300&fit=crop&crop=center`}
                        alt={`Video creation thumbnail ${item}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VideoCreation;