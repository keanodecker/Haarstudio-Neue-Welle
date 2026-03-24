"use client";

import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-xl p-6 shadow-brown hover:shadow-brown-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">{title}</h4>
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
