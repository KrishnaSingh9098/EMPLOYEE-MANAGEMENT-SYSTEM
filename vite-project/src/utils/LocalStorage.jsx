// localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete project documentation.",
        date: "2024-10-01",
        taskCategory: "Documentation",
        active: true,
        new: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Update website content.",
        date: "2024-10-05",
        taskCategory: "Content Management",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Fix bugs in the application.",
        date: "2024-10-10",
        taskCategory: "Development",
        active: false,
        new: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Prepare presentation for client meeting.",
        date: "2024-10-02",
        taskCategory: "Presentation",
        active: true,
        new: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Conduct market research.",
        date: "2024-10-07",
        taskCategory: "Research",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Analyze sales data.",
        date: "2024-10-12",
        taskCategory: "Analysis",
        active: true,
        new: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 4",
        description: "Review project timelines.",
        date: "2024-10-15",
        taskCategory: "Project Management",
        active: false,
        new: true,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 3,
      new: 2,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Isha",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Attend training session.",
        date: "2024-10-03",
        taskCategory: "Training",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Create user guide for software.",
        date: "2024-10-08",
        taskCategory: "Documentation",
        active: false,
        new: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Develop new feature for product.",
        date: "2024-10-14",
        taskCategory: "Development",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      new: 2,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Anaya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Design new marketing materials.",
        date: "2024-10-04",
        taskCategory: "Design",
        active: true,
        new: true,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Coordinate team meeting.",
        date: "2024-10-09",
        taskCategory: "Meeting",
        active: true,
        new: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Finalize budget proposal.",
        date: "2024-10-11",
        taskCategory: "Finance",
        active: false,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Review team performance.",
        date: "2024-10-16",
        taskCategory: "HR",
        active: true,
        new: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 3,
      new: 2,
      completed: 2,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Reyansh",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Test software for bugs.",
        date: "2024-10-06",
        taskCategory: "Testing",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Prepare report for stakeholders.",
        date: "2024-10-14",
        taskCategory: "Reporting",
        active: true,
        new: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Update user interface.",
        date: "2024-10-18",
        taskCategory: "Development",
        active: true,
        new: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 4",
        description: "Participate in project review.",
        date: "2024-10-20",
        taskCategory: "Review",
        active: true,
        new: false,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 4,
      new: 1,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee =  JSON.parse(localStorage.getItem("employees"))
  const admin =  JSON.parse(localStorage.getItem('admin'))
  return{admin,employee}
  
};
