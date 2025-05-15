import React from "react";
import { Link } from "react-router-dom";

const HomeView: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">React + TypeScript + Tailwind</h1>
      <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-primary">
        Go to About
      </Link>

      <p className="mt-8 text-muted text-center">Edit src/views/HomeView.vue</p>

      <div className="w-full max-w-md mx-auto text-center border-t border-border mt-8 pt-8 text-muted">Powered by RockoAI</div>
    </div>
  );
};

export default HomeView;
