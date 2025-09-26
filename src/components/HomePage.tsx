import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, User, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import CourseCard from './CourseCard';
import UserProfile from './UserProfile';

interface Course {
  id: string;
  title: string;
  teacher: string;
  teacherSkill: string;
  wantedSkill: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  avatar: string;
}

const HomePage = () => {
  const [user, setUser] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const dummyCourses: Course[] = [
    {
      id: '1',
      title: 'Master React.js Fundamentals',
      teacher: 'Sarah Chen',
      teacherSkill: 'React.js',
      wantedSkill: 'Python',
      description: 'Learn React from hooks to advanced patterns. Perfect for beginners to intermediate developers.',
      level: 'Intermediate',
      duration: '8 weeks',
      rating: 4.8,
      avatar: '👩‍💻'
    },
    {
      id: '2',
      title: 'JavaScript ES6+ Deep Dive',
      teacher: 'Mike Rodriguez',
      teacherSkill: 'JavaScript',
      wantedSkill: 'Machine Learning',
      description: 'Modern JavaScript concepts, async programming, and advanced techniques.',
      level: 'Advanced',
      duration: '6 weeks',
      rating: 4.9,
      avatar: '👨‍💼'
    },
    {
      id: '3',
      title: 'Python for Data Science',
      teacher: 'Dr. Emily Zhang',
      teacherSkill: 'Python',
      wantedSkill: 'React.js',
      description: 'Complete Python course covering pandas, numpy, and data visualization.',
      level: 'Beginner',
      duration: '10 weeks',
      rating: 4.7,
      avatar: '👩‍🔬'
    },
    {
      id: '4',
      title: 'Machine Learning Basics',
      teacher: 'Alex Kumar',
      teacherSkill: 'Machine Learning',
      wantedSkill: 'Web Design',
      description: 'Introduction to ML algorithms, supervised learning, and neural networks.',
      level: 'Intermediate',
      duration: '12 weeks',
      rating: 4.6,
      avatar: '👨‍🎓'
    },
    {
      id: '5',
      title: 'UI/UX Design Principles',
      teacher: 'Lisa Park',
      teacherSkill: 'UI/UX Design',
      wantedSkill: 'JavaScript',
      description: 'Design thinking, user research, prototyping, and visual design fundamentals.',
      level: 'Beginner',
      duration: '7 weeks',
      rating: 4.8,
      avatar: '👩‍🎨'
    },
    {
      id: '6',
      title: 'Node.js Backend Development',
      teacher: 'James Wilson',
      teacherSkill: 'Node.js',
      wantedSkill: 'DevOps',
      description: 'Build scalable backend applications with Express, MongoDB, and authentication.',
      level: 'Intermediate',
      duration: '9 weeks',
      rating: 4.5,
      avatar: '👨‍💻'
    }
  ];

  const filteredCourses = dummyCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.teacherSkill.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.wantedSkill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">SkillConnect</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses, skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 bg-surface border-border"
                />
              </div>

              <Button
                onClick={() => setShowProfile(true)}
                className="flex items-center space-x-2 bg-surface hover:bg-surface-elevated border border-border"
                variant="outline"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">{user?.name || 'User'}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user?.name || 'Learner'}!
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover amazing knowledge exchange opportunities
          </p>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-surface border-border"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="bg-surface border-border">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          <p className="text-muted-foreground">
            {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div key={course.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No courses found matching your search.</p>
          </div>
        )}
      </main>

      {/* User Profile Modal */}
      <UserProfile
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
        user={user}
        onUserUpdate={setUser}
      />
    </div>
  );
};

export default HomePage;