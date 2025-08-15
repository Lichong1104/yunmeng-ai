import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { 
  Users, Home, Palette, Settings, Video, Image, Mic, Shield, 
  Database, Activity, AlertTriangle, Download, Upload, 
  HardDrive, Cpu, MemoryStick, Wifi, Server, FileText
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SystemManagement = () => {
  const navigate = useNavigate();
  
  const sidebarItems = [
    { icon: Home, label: "首页", path: "/video-creation" },
    { icon: Palette, label: "创作素材", path: "/creative-materials" },
    { icon: Settings, label: "单元功能", path: "/video-settings" },
    { icon: Image, label: "文生图片", path: "/text-to-image" },
    { icon: Video, label: "图生视频", path: "/image-to-video" },
    { icon: Video, label: "文生视频", path: "/text-to-video" },
    { icon: Mic, label: "口播", path: "/voice-broadcast" },
    { icon: Settings, label: "系统管理", active: true, path: "/system-management" }
  ];

  const systemStats = {
    cpu: 65,
    memory: 72,
    storage: 45,
    network: 89
  };

  const users = [
    { id: 1, name: "陈志远", email: "chen.zhiyuan@yunmeng.com", role: "管理员", status: "在线", lastActive: "刚刚" },
    { id: 2, name: "刘雅婷", email: "liu.yating@yunmeng.com", role: "编辑", status: "离线", lastActive: "2小时前" },
    { id: 3, name: "王建华", email: "wang.jianhua@yunmeng.com", role: "用户", status: "在线", lastActive: "5分钟前" },
  ];

  const systemLogs = [
    { id: 1, time: "2024-01-15 14:30:25", level: "INFO", message: "用户登录成功", user: "张三" },
    { id: 2, time: "2024-01-15 14:25:18", level: "WARNING", message: "系统内存使用率超过70%", user: "系统" },
    { id: 3, time: "2024-01-15 14:20:12", level: "ERROR", message: "文件上传失败", user: "李四" },
    { id: 4, time: "2024-01-15 14:15:45", level: "INFO", message: "视频生成完成", user: "王五" },
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
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              系统正常
            </Badge>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              导出报告
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
              <div className="inline-block bg-gradient-to-r from-gray-600 to-gray-800 px-8 py-4 rounded-2xl shadow-lg transform -rotate-1">
                <h1 className="text-3xl font-bold text-white mb-2">系统管理中心</h1>
                <p className="text-gray-300">管理系统设置和监控系统状态</p>
              </div>
            </div>

            {/* System Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border-2 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">CPU使用率</p>
                      <p className="text-2xl font-bold text-blue-600">{systemStats.cpu}%</p>
                    </div>
                    <Cpu className="w-8 h-8 text-blue-500" />
                  </div>
                  <Progress value={systemStats.cpu} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">内存使用率</p>
                      <p className="text-2xl font-bold text-green-600">{systemStats.memory}%</p>
                    </div>
                    <MemoryStick className="w-8 h-8 text-green-500" />
                  </div>
                  <Progress value={systemStats.memory} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">存储使用率</p>
                      <p className="text-2xl font-bold text-orange-600">{systemStats.storage}%</p>
                    </div>
                    <HardDrive className="w-8 h-8 text-orange-500" />
                  </div>
                  <Progress value={systemStats.storage} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">网络状态</p>
                      <p className="text-2xl font-bold text-purple-600">{systemStats.network}%</p>
                    </div>
                    <Wifi className="w-8 h-8 text-purple-500" />
                  </div>
                  <Progress value={systemStats.network} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="users" className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  用户管理
                </TabsTrigger>
                <TabsTrigger value="permissions" className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  权限管理
                </TabsTrigger>
                <TabsTrigger value="system" className="flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  系统设置
                </TabsTrigger>
                <TabsTrigger value="data" className="flex items-center">
                  <Database className="w-4 h-4 mr-2" />
                  数据管理
                </TabsTrigger>
                <TabsTrigger value="logs" className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  系统日志
                </TabsTrigger>
              </TabsList>

              {/* User Management */}
              <TabsContent value="users" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>用户列表</span>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Users className="w-4 h-4 mr-2" />
                        添加用户
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {users.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-sm">{user.name[0]}</span>
                            </div>
                            <div>
                              <h4 className="font-medium">{user.name}</h4>
                              <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Badge variant={user.role === "管理员" ? "default" : "secondary"}>
                              {user.role}
                            </Badge>
                            <Badge variant={user.status === "在线" ? "default" : "secondary"} 
                                   className={user.status === "在线" ? "bg-green-100 text-green-800" : ""}>
                              {user.status}
                            </Badge>
                            <p className="text-sm text-gray-500">{user.lastActive}</p>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">编辑</Button>
                              <Button variant="outline" size="sm">删除</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Permissions Management */}
              <TabsContent value="permissions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>权限配置</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">视频创建权限</h4>
                          <p className="text-sm text-gray-600">允许用户创建和编辑视频</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">素材管理权限</h4>
                          <p className="text-sm text-gray-600">允许用户管理创作素材</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">系统管理权限</h4>
                          <p className="text-sm text-gray-600">允许用户访问系统管理功能</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* System Settings */}
              <TabsContent value="system" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>基本设置</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">系统名称</label>
                        <Input defaultValue="云梦AI创作平台" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">系统版本</label>
                        <Input defaultValue="v2.1.0" disabled />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">自动备份</span>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>性能设置</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">最大并发用户</label>
                        <Input defaultValue="100" type="number" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">缓存大小 (MB)</label>
                        <Input defaultValue="512" type="number" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">启用缓存</span>
                        <Switch defaultChecked />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Data Management */}
              <TabsContent value="data" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>数据备份</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">用户数据</h4>
                          <p className="text-sm text-gray-600">最后备份: 2024-01-15 02:00</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          备份
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">创作素材</h4>
                          <p className="text-sm text-gray-600">最后备份: 2024-01-14 02:00</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          备份
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>数据统计</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">总用户数</span>
                        <Badge variant="outline">1,247</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">总素材数</span>
                        <Badge variant="outline">3,892</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">总视频数</span>
                        <Badge variant="outline">856</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">存储使用量</span>
                        <Badge variant="outline">45.2 GB</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* System Logs */}
              <TabsContent value="logs" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>系统日志</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          导出日志
                        </Button>
                        <Button variant="outline" size="sm">
                          清空日志
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {systemLogs.map((log) => (
                        <div key={log.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                          <Badge 
                            variant={
                              log.level === "ERROR" ? "destructive" : 
                              log.level === "WARNING" ? "default" : "secondary"
                            }
                            className={
                              log.level === "WARNING" ? "bg-yellow-100 text-yellow-800" : ""
                            }
                          >
                            {log.level}
                          </Badge>
                          <span className="text-sm text-gray-600 min-w-32">{log.time}</span>
                          <span className="flex-1">{log.message}</span>
                          <span className="text-sm text-gray-500">{log.user}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SystemManagement;