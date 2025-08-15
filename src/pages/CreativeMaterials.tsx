import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, Home, Palette, Settings, Video, Image, Mic, Search, 
  Filter, Download, Trash2, Eye, Plus, Clock, Star, Folder
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreativeMaterials = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const sidebarItems = [
    { icon: Home, label: "首页", path: "/video-creation" },
    { icon: Palette, label: "创作素材", active: true, path: "/creative-materials" },
    { icon: Settings, label: "单元功能", path: "/video-settings" },
    { icon: Image, label: "文生图片", path: "/text-to-image" },
    { icon: Video, label: "图生视频", path: "/image-to-video" },
    { icon: Video, label: "文生视频", path: "/text-to-video" },
    { icon: Mic, label: "口播", path: "/voice-broadcast" },
    { icon: Settings, label: "系统管理", path: "/system-management" }
  ];

  const imageMaterials = [
    { id: 1, name: "海洋背景", type: "image", size: "1920x1080", date: "2024-01-15", category: "背景", url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop&crop=center", favorite: true },
    { id: 2, name: "星空夜景", type: "image", size: "1920x1080", date: "2024-01-14", category: "风景", url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop&crop=center", favorite: false },
    { id: 3, name: "卡通人物", type: "image", size: "512x512", date: "2024-01-13", category: "角色", url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop", favorite: true },
    { id: 4, name: "高山景色", type: "image", size: "1920x1080", date: "2024-01-12", category: "风景", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", favorite: false },
  ];

  const videoMaterials = [
    { id: 5, name: "产品展示", type: "video", duration: "00:30", date: "2024-01-15", category: "商业", thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop", favorite: false },
    { id: 6, name: "教育讲座", type: "video", duration: "05:20", date: "2024-01-14", category: "教育", thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop", favorite: true },
    { id: 7, name: "风景时光", type: "video", duration: "02:15", date: "2024-01-13", category: "风景", thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center", favorite: false },
  ];

  const audioMaterials = [
    { id: 8, name: "背景音乐1", type: "audio", duration: "03:45", date: "2024-01-15", category: "音乐", favorite: false },
    { id: 9, name: "播客录音", type: "audio", duration: "12:30", date: "2024-01-14", category: "语音", favorite: true },
    { id: 10, name: "音效素材", type: "audio", duration: "00:05", date: "2024-01-13", category: "音效", favorite: false },
  ];

  const categories = [
    { value: "all", label: "全部", count: 10 },
    { value: "背景", label: "背景", count: 3 },
    { value: "风景", label: "风景", count: 2 },
    { value: "角色", label: "角色", count: 1 },
    { value: "商业", label: "商业", count: 2 },
    { value: "教育", label: "教育", count: 1 },
    { value: "音乐", label: "音乐", count: 1 },
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
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Title */}
            <div className="mb-8 text-center">
              <div className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 px-8 py-4 rounded-2xl shadow-lg transform rotate-1">
                <h1 className="text-3xl font-bold text-white mb-2">创作素材库</h1>
                <p className="text-orange-100">管理您的所有创作素材</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Left Sidebar - Categories */}
              <div className="lg:col-span-1">
                <Card className="border-2 border-orange-200 bg-orange-50/50 sticky top-6">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Folder className="w-5 h-5 mr-2" />
                      分类管理
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.value}
                          onClick={() => setSelectedCategory(category.value)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                            selectedCategory === category.value
                              ? "bg-orange-200 text-orange-800"
                              : "hover:bg-orange-100"
                          }`}
                        >
                          <span className="text-sm">{category.label}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </button>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        新建分类
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3">
                {/* Search and Filter Bar */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="搜索素材..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      筛选
                    </Button>
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      上传
                    </Button>
                  </div>
                </div>

                {/* Tabs for Different Material Types */}
                <Tabs defaultValue="images" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="images" className="flex items-center">
                      <Image className="w-4 h-4 mr-2" />
                      图片素材
                    </TabsTrigger>
                    <TabsTrigger value="videos" className="flex items-center">
                      <Video className="w-4 h-4 mr-2" />
                      视频素材
                    </TabsTrigger>
                    <TabsTrigger value="audio" className="flex items-center">
                      <Mic className="w-4 h-4 mr-2" />
                      音频素材
                    </TabsTrigger>
                  </TabsList>

                  {/* Image Materials */}
                  <TabsContent value="images" className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {imageMaterials.map((material) => (
                        <Card key={material.id} className="group hover:shadow-lg transition-shadow">
                          <div className="relative">
                            <img
                              src={material.url}
                              alt={material.name}
                              className="w-full h-32 object-cover rounded-t-lg"
                            />
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                                <Star className={`w-4 h-4 ${material.favorite ? 'text-yellow-500 fill-current' : ''}`} />
                              </Button>
                            </div>
                          </div>
                          <CardContent className="p-3">
                            <h4 className="font-medium text-sm truncate">{material.name}</h4>
                            <p className="text-xs text-gray-500">{material.size}</p>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="outline" className="text-xs">
                                {material.category}
                              </Badge>
                              <div className="flex space-x-1">
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Eye className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Download className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {material.date}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Video Materials */}
                  <TabsContent value="videos" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {videoMaterials.map((material) => (
                        <Card key={material.id} className="group hover:shadow-lg transition-shadow">
                          <div className="relative">
                            <img
                              src={material.thumbnail}
                              alt={material.name}
                              className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                              <Button size="sm" variant="secondary" className="rounded-full">
                                <Video className="w-4 h-4" />
                              </Button>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {material.duration}
                            </div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                                <Star className={`w-4 h-4 ${material.favorite ? 'text-yellow-500 fill-current' : ''}`} />
                              </Button>
                            </div>
                          </div>
                          <CardContent className="p-3">
                            <h4 className="font-medium text-sm truncate">{material.name}</h4>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="outline" className="text-xs">
                                {material.category}
                              </Badge>
                              <div className="flex space-x-1">
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Eye className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Download className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {material.date}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Audio Materials */}
                  <TabsContent value="audio" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {audioMaterials.map((material) => (
                        <Card key={material.id} className="group hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                                <Mic className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">{material.name}</h4>
                                <p className="text-xs text-gray-500">{material.duration}</p>
                                <Badge variant="outline" className="text-xs mt-1">
                                  {material.category}
                                </Badge>
                              </div>
                              <div className="flex flex-col space-y-1">
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Star className={`w-3 h-3 ${material.favorite ? 'text-yellow-500 fill-current' : ''}`} />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Download className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {material.date}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreativeMaterials;