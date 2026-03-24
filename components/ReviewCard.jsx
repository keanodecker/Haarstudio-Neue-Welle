"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const ReviewCard = ({ name, text, rating = 5, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 shadow-brown hover:shadow-brown-lg transition-all duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground leading-relaxed mb-4 text-sm">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">Google Bewertung</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
