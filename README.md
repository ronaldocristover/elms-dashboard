# eLMS Frontend

A complete Learning Management System (LMS) Dashboard built with Vue 3, Vite, Tailwind CSS, and Pinia.

## 🎯 Key Features

### Authentication
- 🔐 **Login Page** - Elegant login form with gradient background
- 🚪 **Logout** - Secure logout functionality
- 🔒 **Route Guard** - Page protection with authentication guard

### Dashboard
- 📊 **Main Dashboard** - Overview statistics and recent data
- 📈 **Real-time Statistics** - Total courses, members, revenue, and active courses
- 🎯 **Quick Access** - Quick access to recent courses and members
- 💰 **Revenue Tracking** - Revenue tracking from courses

### Course Management
- 📚 **Course List** - Table with filters and search
- ➕ **Add Course** - Form to add new courses
- ✏️ **Edit Course** - Update course information
- 👁️ **Course Details** - View complete course information
- 🔍 **Filter & Search** - Filter by category and status
- 🗑️ **Delete Course** - Remove unnecessary courses

### Member Management
- 👥 **Member List** - Table with filters and search
- ➕ **Add Member** - Form to add new members
- ✏️ **Edit Member** - Update member information
- 👁️ **Member Details** - View complete member profile
- 🔍 **Filter & Search** - Filter by role and status
- 🗑️ **Delete Member** - Remove inactive members

### User Management (Admin, Instructor, Student)
- 👤 **User Management** - Manage users with 3 different roles
- 🎭 **Role-Based Access** - Admin, Instructor, and Student roles
- 📝 **User Profiles** - Complete profiles with avatars
- ✏️ **Profile Management** - Profile page for logged-in users
- 🔑 **Password Management** - UI for password reset/recovery

### Additional Modules (Store Ready)
- 📝 **Content Management** - Materials (PDF, video, documents)
- 📊 **Assessment & Testing** - Quiz, exam, grading system
- 📈 **Progress Tracking** - Course completion, certificates
- 📢 **Communication** - Announcements, forums (planned)
- 💳 **Payment/Billing** - Invoices, subscriptions, payment tracking

### Reusable Components
- 🔘 **BaseButton** - Button with various variants (primary, secondary, success, danger, warning, outline)
- 📋 **BaseTable** - Table with slots for custom cells and actions
- 🔎 **SearchInput** - Search input with icon
- 🎚️ **FilterDropdown** - Reusable filter dropdown
- 🍞 **Breadcrumb** - Breadcrumb navigation for each page
- 📱 **Sidebar** - Responsive side navigation menu

## 🛠️ Technologies Used

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Vite** - Fast and modern build tool
- **Tailwind CSS v3** - Utility-first CSS framework
- **Pinia** - State management for Vue 3
- **Vue Router** - Official router for Vue.js with navigation guards

## 📁 Project Structure

```
elms-frontend/
├── src/
│   ├── assets/              # Static assets (images, fonts, etc.)
│   ├── components/          # Reusable components
│   │   ├── BaseButton.vue
│   │   ├── BaseTable.vue
│   │   ├── SearchInput.vue
│   │   ├── FilterDropdown.vue
│   │   ├── Breadcrumb.vue
│   │   └── Sidebar.vue (Responsive with mobile menu)
│   ├── layouts/             # Layout templates
│   │   └── MainLayout.vue (Responsive layout)
│   ├── router/              # Vue Router configuration
│   │   └── index.js
│   ├── stores/              # Pinia stores
│   │   ├── auth.js          # Authentication
│   │   ├── courses.js       # Courses management
│   │   ├── members.js       # Members management
│   │   ├── users.js         # Users management (Admin/Instructor/Student)
│   │   ├── materials.js     # Learning materials
│   │   ├── assessments.js   # Quiz & tests
│   │   ├── progress.js      # Progress tracking & certificates
│   │   ├── announcements.js # Announcements
│   │   └── payments.js      # Payments & subscriptions
│   ├── views/               # Main pages
│   │   ├── Login.vue
│   │   ├── Dashboard.vue (with revenue tracking)
│   │   ├── Profile.vue      # User profile management
│   │   ├── courses/
│   │   │   ├── Index.vue    # Course list
│   │   │   ├── Create.vue   # Add course form
│   │   │   ├── Edit.vue     # Edit course form
│   │   │   └── Detail.vue   # Course details
│   │   ├── members/
│   │   │   ├── Index.vue    # Member list
│   │   │   ├── Create.vue   # Add member form
│   │   │   ├── Edit.vue     # Edit member form
│   │   │   └── Detail.vue   # Member details
│   │   └── users/
│   │       ├── Index.vue    # User list
│   │       ├── Create.vue   # Add user form
│   │       ├── Edit.vue     # Edit user form
│   │       └── Detail.vue   # User details
│   ├── App.vue              # Root component
│   ├── main.js              # Application entry point
│   └── style.css            # Global styles with Tailwind
├── public/                  # Public files not processed
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.js           # Vite configuration
```

## 🚀 How to Run

### Install Dependencies

```bash
cd elms-frontend
npm install
```

### Development Server

```bash
npm run dev
```

The application will run at `http://localhost:5173` (or another port if 5173 is in use)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔐 How to Login

For demo purposes, you can use **any username and password** to login. The system will save the session in localStorage.

Example:
- Username: `admin`
- Password: `admin123`

## 📋 Additional Features

### Filter and Search
Each index page (list) is equipped with:
- **Search bar** - Search by name, email, or other keywords
- **Filter dropdown** - Filter by category, status, or role
- **Real-time filtering** - Filter and search results displayed instantly

### Breadcrumb Navigation
Each page has breadcrumbs for easy navigation:
```
Dashboard > Course Management > Course Details
```

### Component Based
All components are made reusable to avoid code duplication:
- Buttons with various variants and sizes
- Tables with slots for customization
- Consistent form input components
- Filters and search that can be used on various pages

## 🎨 Design System

### Colors
- **Primary (Blue)**: Main actions, active navigation
- **Success (Green)**: Active status, successful actions
- **Warning (Yellow)**: Edit, warnings
- **Danger (Red)**: Delete, inactive status
- **Secondary (Gray)**: Secondary actions
- **Purple**: Instructor role, certificates

### Button Variants
```vue
<BaseButton variant="primary">Primary</BaseButton>
<BaseButton variant="secondary">Secondary</BaseButton>
<BaseButton variant="success">Success</BaseButton>
<BaseButton variant="danger">Danger</BaseButton>
<BaseButton variant="warning">Warning</BaseButton>
<BaseButton variant="outline">Outline</BaseButton>
```

### Button Sizes
```vue
<BaseButton size="sm">Small</BaseButton>
<BaseButton size="md">Medium</BaseButton>
<BaseButton size="lg">Large</BaseButton>
```

## 🔄 State Management

Using Pinia for state management with 3 stores:

### Auth Store
- `user` - Logged-in user data
- `isAuthenticated` - Authentication status
- `login()` - Login function
- `logout()` - Logout function
- `checkAuth()` - Check authentication status

### Courses Store
- `courses` - Array of course data
- `getCourseById()` - Get course by ID
- `addCourse()` - Add new course
- `updateCourse()` - Update course
- `deleteCourse()` - Delete course

### Members Store
- `members` - Array of member data
- `getMemberById()` - Get member by ID
- `addMember()` - Add new member
- `updateMember()` - Update member
- `deleteMember()` - Delete member

## 🛣️ Routing

The application uses Vue Router with authentication guard:

### Public Routes
- `/` - Redirect to login
- `/login` - Login page

### Protected Routes (Requires Authentication)
- `/dashboard` - Main dashboard
- `/courses` - Course list
- `/courses/create` - Add course form
- `/courses/:id` - Course details
- `/courses/:id/edit` - Edit course form
- `/members` - Member list
- `/members/create` - Add member form
- `/members/:id` - Member details
- `/members/:id/edit` - Edit member form

## 📱 Responsive Design

The application is **fully responsive** for various screen sizes:
- **Mobile** (< 768px) - Mobile menu with hamburger button
- **Tablet** (768px - 1024px) - Optimized layout
- **Desktop** (> 1024px) - Full sidebar navigation

### Responsive Features:
- ✅ Mobile-first approach
- ✅ Hamburger menu for mobile
- ✅ Touch-friendly buttons and links
- ✅ Responsive tables (card view on mobile)
- ✅ Adaptive spacing and typography
- ✅ Collapsible sidebar
- ✅ Optimized for all screen sizes

## 📚 Documentation

All comprehensive documentation has been moved to the `doc/` folder for better organization:

- **[📖 Documentation Index](doc/README.md)** - Complete documentation overview and navigation
- **[🎨 Design & Theme](doc/)** - Design system, theme configuration, and styling guides
- **[🧩 Components & Features](doc/)** - Form components, dashboard features, and feature lists
- **[🏗️ Architecture & Modules](doc/)** - System architecture and module documentation
- **[🚀 Quick References](doc/)** - Code snippets and development guides

## 🔧 Further Development

Some ideas for further development:
- [ ] Integration with REST API backend
- [ ] Real authentication implementation with JWT
- [ ] Image/file upload for thumbnails and avatars
- [ ] Pagination for tables
- [ ] Export data to Excel/PDF
- [ ] Quiz and assignment system implementation
- [ ] Student progress tracking
- [ ] Real-time notifications
- [ ] User profile management with photo upload
- [ ] Advanced analytics and reporting
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Dark mode

## 📄 License

MIT

## 👨‍💻 Developer

Made with ❤️ using Vue 3 and Tailwind CSS