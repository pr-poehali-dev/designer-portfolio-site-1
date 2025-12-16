import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const portfolioCategories = [
    { 
      id: 'logos',
      title: 'Логотипы', 
      icon: 'Hexagon',
      count: 12,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'avatars',
      title: 'Аватарки', 
      icon: 'User',
      count: 8,
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'layouts',
      title: 'Полное оформление', 
      icon: 'Layout',
      count: 15,
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      id: 'icons',
      title: 'Иконки', 
      icon: 'Sparkles',
      count: 24,
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      id: 'mockups',
      title: 'Макеты', 
      icon: 'Smartphone',
      count: 10,
      gradient: 'from-violet-500 to-purple-500'
    },
    { 
      id: 'buttons',
      title: 'Кнопки для игр', 
      icon: 'Gamepad2',
      count: 18,
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      id: 'cards',
      title: 'Карточки товаров', 
      icon: 'ShoppingBag',
      count: 14,
      gradient: 'from-amber-500 to-orange-500'
    },
    { 
      id: 'banners',
      title: 'Баннеры', 
      icon: 'Image',
      count: 20,
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const services = [
    { icon: 'Palette', title: 'Брендинг', description: 'Создание фирменного стиля и логотипов' },
    { icon: 'Layout', title: 'UI/UX дизайн', description: 'Разработка интерфейсов сайтов и приложений' },
    { icon: 'Smartphone', title: 'Моушн-дизайн', description: 'Анимации и видеоролики' },
    { icon: 'Package', title: 'Упаковка', description: 'Дизайн упаковки и этикеток' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Designer
          </h1>
          
          <div className="hidden md:flex items-center gap-8">
            {['home', 'portfolio', 'services', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'services' && 'Услуги'}
                {section === 'about' && 'О мне'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            <Icon name={theme === 'light' ? 'Moon' : 'Sun'} size={20} />
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Креативный дизайнер
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создаю дизайн, который{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float inline-block">
                вдохновляет
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональный дизайн для вашего бренда: от логотипов до полного оформления проектов
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="rounded-full px-8"
                onClick={() => scrollToSection('portfolio')}
              >
                Смотреть работы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8"
                onClick={() => scrollToSection('contact')}
              >
                Связаться
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Примеры моих работ в различных категориях</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioCategories.map((category, index) => (
              <Card 
                key={category.id}
                className="group cursor-pointer overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{category.count} работ</p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
                    Смотреть
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Показать все работы
              <Icon name="ExternalLink" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Что я могу сделать для вас</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon} size={36} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">О мне</h2>
            <Card className="p-8 border-2">
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Привет! Я профессиональный дизайнер с более чем 5-летним опытом создания визуальных решений 
                  для различных брендов и проектов.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Моя специализация включает разработку логотипов, UI/UX дизайн, создание брендинга и 
                  иллюстраций. Я работаю с современными инструментами и следую актуальным трендам в дизайне.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects', 'Blender'].map((tool) => (
                    <span 
                      key={tool}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Давайте работать вместе</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Готов обсудить ваш проект и воплотить ваши идеи в жизнь
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <CardContent className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-muted-foreground text-sm">designer@example.com</div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors">
                <CardContent className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div className="text-sm font-medium">Телефон</div>
                  <div className="text-muted-foreground text-sm">+7 (999) 123-45-67</div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors">
                <CardContent className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-accent" />
                  </div>
                  <div className="text-sm font-medium">Telegram</div>
                  <div className="text-muted-foreground text-sm">@designer</div>
                </CardContent>
              </Card>
            </div>

            <Button 
              size="lg"
              className="rounded-full px-8 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
            >
              Написать мне
              <Icon name="Send" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Designer Portfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
