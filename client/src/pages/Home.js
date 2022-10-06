// import React from "react";

// import WorkoutList from "../components/WorkoutList";
// import WorkoutForm from "../components/WorkoutForm";
// // import FriendList from '../components/FriendList';
// import Auth from "../utils/auth";
// import { useQuery } from "@apollo/client";
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";
// const Home = () => {
//   //   use useQuery hook to make query request
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   //   use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
//   const workouts = data?.workouts || [];
//   const loggedIn = Auth.loggedIn();
//   return (
//     <main>
//       <div className="flex-row justify-space-between">
//         {loggedIn && (
//           <div className="col-12 mb-3">
//             <WorkoutForm />
//           </div>
//         )}{" "}
//         <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <WorkoutList
//               workouts={workouts}
//               title="Some Feed for Workout(s)..."
//             />
//           )}
//         </div>
//         {/* {loggedIn && userData ? (
//           <div className="col-12 col-lg-3 mb-3">
//             <FriendList
//               username={userData.me.username}
//               friendCount={userData.me.friendCount}
//               friends={userData.me.friends}
//             />
//           </div>
//         ) : null} */}
//       </div>
//     </main>
//   );
// };
// export default Home;
