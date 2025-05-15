import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About</h1>
      <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-primary">
        Home
      </Link>

      <p className="mt-8 text-muted text-center">Edit src/views/About.vue</p>

      <div className="w-full max-w-md mx-auto text-center border-t border-border mt-8 pt-8 text-muted">Powered by RockoAI</div>
    </div>
  );
};

export default About;
