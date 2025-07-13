import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [checkedDays, setCheckedDays] = useState<boolean[]>(new Array(7).fill(false));
  const [currentWeek, setCurrentWeek] = useState(1);
  const [totalRewards, setTotalRewards] = useState(3);

  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const completedDays = checkedDays.filter(Boolean).length;
  const weekProgress = (completedDays / 7) * 100;

  const toggleDay = (index: number) => {
    const newChecked = [...checkedDays];
    newChecked[index] = !newChecked[index];
    setCheckedDays(newChecked);
  };

  const mockVideos = [
    { id: 1, title: 'Мотивационный ролик #1', unlocked: true, thumbnail: '/img/1883e6e4-7ad5-431a-82f4-2b57550dc056.jpg' },
    { id: 2, title: 'Секреты продуктивности', unlocked: true, thumbnail: '/img/004d2a51-6fd0-4ee9-945c-052a20aef4a4.jpg' },
    { id: 3, title: 'Достижение целей', unlocked: true, thumbnail: '/img/1883e6e4-7ad5-431a-82f4-2b57550dc056.jpg' },
    { id: 4, title: 'Новый уровень', unlocked: false, thumbnail: '/img/004d2a51-6fd0-4ee9-945c-052a20aef4a4.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-teal-50 font-montserrat">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-energetic via-teal to-navy text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              WEEKLY WINS
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Дерзко достигай целей каждый день. Получай крутые видео за успехи. 
              <span className="font-semibold text-yellow-300"> Будь лучшей версией себя!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-energetic hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold">
                <Icon name="Rocket" className="mr-2" />
                Начать побеждать
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                <Icon name="Play" className="mr-2" />
                Посмотреть видео
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Weekly Calendar */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-energetic to-teal text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Icon name="Calendar" className="mr-3" size={28} />
                    Неделя {currentWeek}
                  </CardTitle>
                  <Badge className="bg-white/20 text-white hover:bg-white/30">
                    {completedDays}/7 дней
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Прогресс недели</span>
                    <span className="text-sm font-bold text-energetic">{Math.round(weekProgress)}%</span>
                  </div>
                  <Progress value={weekProgress} className="h-3 bg-gray-200" />
                </div>
                
                <div className="grid grid-cols-7 gap-3">
                  {days.map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-sm font-medium text-gray-600 mb-2">{day}</div>
                      <button
                        onClick={() => toggleDay(index)}
                        className={`w-12 h-12 rounded-xl border-2 transition-all duration-300 hover:scale-110 ${
                          checkedDays[index]
                            ? 'bg-gradient-to-br from-energetic to-teal text-white border-transparent shadow-lg'
                            : 'bg-white border-gray-300 hover:border-energetic hover:bg-energetic/5'
                        }`}
                      >
                        {checkedDays[index] && (
                          <Icon name="Check" size={20} className="mx-auto text-white" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                {completedDays === 7 && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border border-green-200 animate-scale-in">
                    <div className="flex items-center text-green-800">
                      <Icon name="Trophy" className="mr-2 text-yellow-500" size={24} />
                      <span className="font-semibold">Поздравляем! Неделя завершена!</span>
                    </div>
                    <p className="text-green-700 mt-1">Новое видео ждёт вас в коллекции 🎉</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Stats & Profile */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-navy to-teal text-white rounded-t-lg">
                <CardTitle className="flex items-center text-xl">
                  <Icon name="User" className="mr-2" />
                  Мой профиль
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-energetic to-teal rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Icon name="Star" className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800">Чемпион недели</h3>
                  <p className="text-gray-600">Уровень: Новичок</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="flex items-center text-gray-700">
                      <Icon name="Award" className="mr-2 text-energetic" size={18} />
                      Награды
                    </span>
                    <span className="font-bold text-energetic">{totalRewards}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="flex items-center text-gray-700">
                      <Icon name="Flame" className="mr-2 text-orange-500" size={18} />
                      Стрик
                    </span>
                    <span className="font-bold text-orange-500">{completedDays} дней</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="flex items-center text-gray-700">
                      <Icon name="Target" className="mr-2 text-teal" size={18} />
                      Недель
                    </span>
                    <span className="font-bold text-teal">{currentWeek}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-xl">
                  <Icon name="Zap" className="mr-2" />
                  Быстрые действия
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Button className="w-full bg-energetic hover:bg-energetic/90 hover:scale-105 transition-all duration-200">
                  <Icon name="Plus" className="mr-2" />
                  Добавить цель
                </Button>
                <Button variant="outline" className="w-full border-teal text-teal hover:bg-teal/5 hover:scale-105 transition-all duration-200">
                  <Icon name="BarChart3" className="mr-2" />
                  Мой прогресс
                </Button>
                <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy/5 hover:scale-105 transition-all duration-200">
                  <Icon name="Settings" className="mr-2" />
                  Настройки
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Video Collection */}
        <div className="mt-12">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center">
                <Icon name="PlayCircle" className="mr-3" size={28} />
                Коллекция наград
              </CardTitle>
              <p className="text-purple-100 mt-2">Ваши заслуженные видео за достижения</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mockVideos.map((video) => (
                  <div key={video.id} className="group cursor-pointer">
                    <div className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                      video.unlocked ? '' : 'opacity-60'
                    }`}>
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {video.unlocked ? (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                          <Icon name="Play" className="text-white" size={32} />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <Icon name="Lock" className="text-white" size={24} />
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-white font-semibold text-sm">{video.title}</h4>
                        {video.unlocked && (
                          <Badge className="mt-2 bg-green-500 hover:bg-green-600">
                            <Icon name="CheckCircle" size={14} className="mr-1" />
                            Разблокировано
                          </Badge>
                        )}
                        {!video.unlocked && (
                          <Badge variant="secondary" className="mt-2 bg-gray-500 text-white">
                            <Icon name="Lock" size={14} className="mr-1" />
                            Заблокировано
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Завершите неделю полностью, чтобы разблокировать новое мотивационное видео!
                </p>
                <Button className="bg-gradient-to-r from-energetic to-teal text-white hover:scale-105 transition-all duration-300 px-8 py-3">
                  <Icon name="Gift" className="mr-2" />
                  Посмотреть все награды
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;