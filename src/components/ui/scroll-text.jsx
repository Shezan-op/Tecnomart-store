"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TextAnimation({
  text = '',
  as = 'h2',
  classname = '',
  className = '',
  variants,
  letterAnime = false,
  lineAnime = false,
  direction = 'up',
  delay = 0,
}) {
  const combinedClassName = classname || className || '';
  const Tag = motion[as] || motion.div;

  // Default directional movement offsets
  const getDirectionOffset = () => {
    switch (direction) {
      case 'left':
        return { x: 40, y: 0 };
      case 'right':
        return { x: -40, y: 0 };
      case 'down':
        return { x: 0, y: -30 };
      case 'up':
      default:
        return { x: 0, y: 30 };
    }
  };

  const defaultVariants = variants || {
    hidden: {
      filter: 'blur(8px)',
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay,
      },
    },
  };

  // Letter by letter animation
  if (letterAnime) {
    const letters = Array.from(text);
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03,
          delayChildren: delay,
        },
      },
    };

    const childVariants = variants || {
      hidden: {
        filter: 'blur(6px)',
        opacity: 0,
        y: 15,
      },
      visible: {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.35,
          ease: 'easeOut',
        },
      },
    };

    return (
      <Tag
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-10%' }}
        className={`inline-block ${combinedClassName}`}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // Word by word / line animation
  if (lineAnime) {
    const words = text.split(' ');
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: delay,
        },
      },
    };

    const wordVariants = variants || {
      hidden: {
        filter: 'blur(8px)',
        opacity: 0,
        y: 20,
      },
      visible: {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };

    return (
      <Tag
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-10%' }}
        className={`inline-block ${combinedClassName}`}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-[0.28em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // Whole block animation
  return (
    <Tag
      variants={defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-10%' }}
      className={combinedClassName}
    >
      {text}
    </Tag>
  );
}
