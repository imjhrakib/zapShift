import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md max-w-md border border-gray-200">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-primary text-3xl mb-4" />

      {/* Description */}
      <p className="mb-6">
        A posture corrector works by providing support and gentle alignment to
        your shoulders, back, and spine, encouraging you to maintain proper
        posture throughout the day.
      </p>

      {/* Dashed Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {/* Avatar Placeholder */}
        <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary">
          <img src={user_photoURL} alt="" />
        </div>

        <div>
          <h4 className="font-semibold text-secondary">{userName}</h4>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
