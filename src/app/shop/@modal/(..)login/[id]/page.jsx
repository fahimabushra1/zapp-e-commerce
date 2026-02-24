// "use client";

// import { useState } from "react";

// export default function LoginModal({ id, onClose }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     alert(`Logging in user ${id} with email: ${email}`);
//     onClose(); // close modal after login
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "rgba(0,0,0,0.5)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 999,
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: "20px",
//           borderRadius: "8px",
//           width: "300px",
//           textAlign: "center",
//         }}
//       >
//         <h2>Login for User {id}</h2>
//         <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}
//           />
//           <button type="submit" style={{ padding: "6px", borderRadius: "4px", backgroundColor: "#007bff", color: "white", border: "none" }}>
//             Login
//           </button>
//         </form>
//         <button onClick={onClose} style={{ marginTop: "10px", color: "red", background: "none", border: "none", cursor: "pointer" }}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";

export default function LoginModal({ params }) {
  const router = useRouter();
  const { id } = params;

  const handleClose = () => {
    router.back(); // closes modal and goes back to previous route
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in user ${id}`);
    handleClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>Login for User {id}</h2>
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              padding: "6px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              padding: "6px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            style={{
              padding: "6px",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
            }}
          >
            Login
          </button>
        </form>
        <button
          onClick={handleClose}
          style={{
            marginTop: "10px",
            color: "red",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
