// // src/components/Dashboard.tsx

// import Link from 'next/link';

// const user = {
//   name: "John Doe",
//   avatar: "https://via.placeholder.com/100",
//   email: "john.doe@example.com",
// };

// const posts = [
//   { id: 1, title: "Post 1", content: "Content of post 1" },
//   { id: 2, title: "Post 2", content: "Content of post 2" },
//   { id: 3, title: "Post 3", content: "Content of post 3" },
//   { id: 4, title: "Post 4", content: "Content of post 4" },
//   { id: 5, title: "Post 5", content: "Content of post 5" },
// ];

// export default function Dashboard() {
//   return (
//     <div className="container mx-auto mt-5 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
//         <Link href="/create-post">
//           <a className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">
//             Create New Post
//           </a>
//         </Link>
//       </div>
//       <p>Email: {user.email}</p>
//       <img src={user.avatar} alt="User Avatar" className="w-24 h-24 rounded-full mb-8" />
//       <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
//       {posts.map(post => (
//         <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
//           <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//           <p className="text-gray-600">{post.content}</p>
//           <div className="flex space-x-4 mt-2">
//             <Link href={`/edit-post/${post.id}`}>
//               <a className="text-purple-700 hover:underline">Edit</a>
//             </Link>
//             <button className="text-red-600 hover:underline" onClick={() => alert(`Delete post with ID: ${post.id}`)}>
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import PostManagement from '@/component/PostManagement';

export default function DashboardPage() {
  return (
    <div>
      <PostManagement />
    </div>
  );
}
