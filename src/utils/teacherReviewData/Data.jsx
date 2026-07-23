export default [
  {
    "id": 1,
    "category_name": "Classroom Climate",
    "category_id": 1,
    "short_measure": "Classroom Safety",
    "meaning": "Feeling Safe",
    "has_student_question": true,
    "has_teacher_question": false,
    "has_observer_question": false,
    "student": {
      "question": "I feel safe and comfortable in this class.",
      "code": "CC_SAF_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Often feel uncomfortable"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Sometimes feel uncomfortable"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Usually feel safe"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Feel safe most of the time"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Always feel safe and comfortable"
            }
          ]
        }
      ]
    }
  },
  {
    "id": 2,
    "category_name": "Classroom Climate",
    "category_id": 1,
    "short_measure": "Student Wellbeing",
    "meaning": "Feeling Good",
    "has_student_question": true,
    "has_teacher_question": false,
    "has_observer_question": false,
    "student": {
      "question": "I generally feel good in this class.",
      "code": "CC_WEL_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Often feel negative"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Sometimes feel negative"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Feel okay most days"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Usually feel good"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Always feel good in this class"
            }
          ]
        }
      ]
    }
  },
  {
    "id": 3,
    "category_name": "Teaching Quality",
    "category_id": 2,
    "short_measure": "Clarity",
    "meaning": "Clear Explanations",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "My teacher explains things clearly and checks we understand",
      "code": "TQ_CLA_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Very hard to understand"
            },
            {
              "id": 2,
              "value": "Instructions unclear"
            },
            {
              "id": 3,
              "value": "Few or no examples"
            },
            {
              "id": 4,
              "value": "Rarely checks understanding"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Sometimes hard to understand"
            },
            {
              "id": 2,
              "value": "Some unclear instructions"
            },
            {
              "id": 3,
              "value": "Few examples"
            },
            {
              "id": 4,
              "value": "Sometimes checks understanding"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Mostly clear"
            },
            {
              "id": 2,
              "value": "Instructions usually clear"
            },
            {
              "id": 3,
              "value": "Some helpful examples"
            },
            {
              "id": 4,
              "value": "Usually checks understanding"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Easy to understand"
            },
            {
              "id": 2,
              "value": "Clear instructions"
            },
            {
              "id": 3,
              "value": "Good examples"
            },
            {
              "id": 4,
              "value": "Often checks understanding"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Very easy to understand"
            },
            {
              "id": 2,
              "value": "Very clear instructions"
            },
            {
              "id": 3,
              "value": "Excellent examples"
            },
            {
              "id": 4,
              "value": "Always checks understanding"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I explain ideas clearly and check understanding.",
      "code": "TQ_CLA_T"
    },
    "observer": {
      "question": "Explanations are clear and understanding is checked.",
      "code": "TQ_CLA_O"
    }
  },
  {
    "id": 4,
    "category_name": "Teaching Quality",
    "category_id": 2,
    "short_measure": "Purpose",
    "meaning": "Clear Learning Goals",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "I know what I’m learning and why.",
      "code": "TQ_PUR_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Goal unclear"
            },
            {
              "id": 2,
              "value": "Purpose not explained"
            },
            {
              "id": 3,
              "value": "No real-world link"
            },
            {
              "id": 4,
              "value": "Hard to see the point"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Goal sometimes unclear"
            },
            {
              "id": 2,
              "value": "Purpose partly explained"
            },
            {
              "id": 3,
              "value": "Real-world link unclear"
            },
            {
              "id": 4,
              "value": "Doesn’t always feel meaningful"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Goal usually clear"
            },
            {
              "id": 2,
              "value": "Some explanation of purpose"
            },
            {
              "id": 3,
              "value": "Some real-world link"
            },
            {
              "id": 4,
              "value": "Sometimes meaningful"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Clear learning goal"
            },
            {
              "id": 2,
              "value": "Explains why it matters"
            },
            {
              "id": 3,
              "value": "Shows real-world use"
            },
            {
              "id": 4,
              "value": "Feels useful"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Very clear learning goal"
            },
            {
              "id": 2,
              "value": "Clear reason for learning"
            },
            {
              "id": 3,
              "value": "Real-life application obvious"
            },
            {
              "id": 4,
              "value": "Feels important and relevant"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I make learning goals clear and meaningful.",
      "code": "TQ_PUR_T"
    },
    "observer": {
      "question": "Learning goals are clear and linked to the lesson.",
      "code": "TQ_PUR_O"
    }
  },
  {
    "id": 5,
    "category_name": "Teaching Quality",
    "category_id": 2,
    "short_measure": "Progression",
    "meaning": "Building on What You Know",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "Lessons build on what I learned before.",
      "code": "TQ_PRO_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Doesn’t connect to last lesson"
            },
            {
              "id": 2,
              "value": "Level not right"
            },
            {
              "id": 3,
              "value": "Hard to keep up"
            },
            {
              "id": 4,
              "value": "Feels disconnected"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Sometimes connected"
            },
            {
              "id": 2,
              "value": "Pace uneven"
            },
            {
              "id": 3,
              "value": "Level not always right"
            },
            {
              "id": 4,
              "value": "Sometimes hard to follow"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Mostly connected"
            },
            {
              "id": 2,
              "value": "Level usually right"
            },
            {
              "id": 3,
              "value": "Can usually keep up"
            },
            {
              "id": 4,
              "value": "Learning makes sense"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Clearly connected"
            },
            {
              "id": 2,
              "value": "Logical order"
            },
            {
              "id": 3,
              "value": "Level right for me"
            },
            {
              "id": 4,
              "value": "I can see progress"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Builds step by step"
            },
            {
              "id": 2,
              "value": "Strong lesson connections"
            },
            {
              "id": 3,
              "value": "Level always right"
            },
            {
              "id": 4,
              "value": "Clear progress over time"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "My lessons follow a clear learning sequence.",
      "code": "TQ_PRO_T"
    },
    "observer": {
      "question": "Activities show logical progression.",
      "code": "TQ_PRO_O"
    }
  },
  {
    "id": 6,
    "category_name": "Teaching Quality",
    "category_id": 2,
    "short_measure": "Challenge",
    "meaning": "Thinking & Challenge",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "This class makes me think deeply.",
      "code": "TQ_CHA_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Too easy"
            },
            {
              "id": 2,
              "value": "Mostly recall tasks"
            },
            {
              "id": 3,
              "value": "Little deep thinking"
            },
            {
              "id": 4,
              "value": "Not challenging"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Some challenge"
            },
            {
              "id": 2,
              "value": "Mostly straightforward tasks"
            },
            {
              "id": 3,
              "value": "Limited deep thinking"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Mix of easy and hard"
            },
            {
              "id": 2,
              "value": "Some problem-solving"
            },
            {
              "id": 3,
              "value": "Some deeper thinking"
            },
            {
              "id": 4,
              "value": "Level feels right"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Often challenging"
            },
            {
              "id": 2,
              "value": "Requires explaining thinking"
            },
            {
              "id": 3,
              "value": "Varied task types"
            },
            {
              "id": 4,
              "value": "Demanding in a good way"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Deep thinking required"
            },
            {
              "id": 2,
              "value": "Hard but manageable"
            },
            {
              "id": 3,
              "value": "Solve problems in new ways"
            },
            {
              "id": 4,
              "value": "Strong intellectual challenge"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I design tasks that stretch students’ thinking.",
      "code": "TQ_CHA_T"
    },
    "observer": {
      "question": "Tasks promote deep thinking and problem-solving.",
      "code": "TQ_CHA_O"
    }
  },
  {
    "id": 7,
    "category_name": "Teaching Quality",
    "category_id": 2,
    "short_measure": "Engagement",
    "meaning": "Taking Part",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "I’m actively involved in lessons.",
      "code": "TQ_ENG_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Few chances to participate"
            },
            {
              "id": 2,
              "value": "Low interaction"
            },
            {
              "id": 3,
              "value": "Limited participation"
            },
            {
              "id": 4,
              "value": "Hard to stay focused"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Some participation"
            },
            {
              "id": 2,
              "value": "Attention not steady"
            },
            {
              "id": 3,
              "value": "Some interaction"
            },
            {
              "id": 4,
              "value": "Involvement uneven"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Regular participation"
            },
            {
              "id": 2,
              "value": "Mostly focused"
            },
            {
              "id": 3,
              "value": "Many contribute"
            },
            {
              "id": 4,
              "value": "Encouraged to join in"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Frequent participation"
            },
            {
              "id": 2,
              "value": "Strong attention"
            },
            {
              "id": 3,
              "value": "Most actively involved"
            },
            {
              "id": 4,
              "value": "Positive learning atmosphere"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Everyone involved"
            },
            {
              "id": 2,
              "value": "Strong focus throughout"
            },
            {
              "id": 3,
              "value": "High participation"
            },
            {
              "id": 4,
              "value": "Active learning environment"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I design lessons that actively engage students.",
      "code": "TQ_ENG_T"
    },
    "observer": {
      "question": "Students are actively engaged in learning.",
      "code": "TQ_ENG_O"
    }
  },
  {
    "id": 8,
    "category_name": "Teaching Quality",
    "category_id": 2,
    "short_measure": "Feedback",
    "meaning": "Knowing Your Progress",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "I know how I’m doing and how to improve.",
      "code": "TQ_FDB_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Rarely told progress"
            },
            {
              "id": 2,
              "value": "Feedback unclear"
            },
            {
              "id": 3,
              "value": "No clear next steps"
            },
            {
              "id": 4,
              "value": "Not helpful"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Sometimes told progress"
            },
            {
              "id": 2,
              "value": "Feedback general"
            },
            {
              "id": 3,
              "value": "Some advice given"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Usually told progress"
            },
            {
              "id": 2,
              "value": "Clear advice"
            },
            {
              "id": 3,
              "value": "Explains what to improve"
            },
            {
              "id": 4,
              "value": "Mostly helpful"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Clearly told progress"
            },
            {
              "id": 2,
              "value": "Specific advice"
            },
            {
              "id": 3,
              "value": "Clear next steps"
            },
            {
              "id": 4,
              "value": "Helpful feedback"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Regular feedback"
            },
            {
              "id": 2,
              "value": "Very specific advice"
            },
            {
              "id": 3,
              "value": "Clear next steps"
            },
            {
              "id": 4,
              "value": "Helps me improve"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I provide feedback that supports improvement.",
      "code": "TQ_FDB_T"
    },
    "observer": {
      "question": "Feedback is specific and supports improvement.",
      "code": "TQ_FDB_O"
    }
  },
  {
    "id": 9,
    "category_name": "Learning Environment",
    "category_id": 3,
    "short_measure": "Pace",
    "meaning": "Lesson Speed",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "The lesson pace feels right.",
      "code": "LC_PAC_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Pace not right"
            },
            {
              "id": 2,
              "value": "Hard to keep up"
            },
            {
              "id": 3,
              "value": "Not enough thinking time"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Pace inconsistent"
            },
            {
              "id": 2,
              "value": "Sometimes rushed"
            },
            {
              "id": 3,
              "value": "Thinking time uneven"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Pace usually works"
            },
            {
              "id": 2,
              "value": "Usually enough thinking time"
            },
            {
              "id": 3,
              "value": "Occasionally rushed or slow"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Good pace"
            },
            {
              "id": 2,
              "value": "Enough thinking time"
            },
            {
              "id": 3,
              "value": "Rarely rushed or slow"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Very well paced"
            },
            {
              "id": 2,
              "value": "Right amount of thinking time"
            },
            {
              "id": 3,
              "value": "Feels balanced throughout"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I adjust pacing to student understanding.",
      "code": "LC_PAC_T"
    },
    "observer": {
      "question": "Pacing aligns with student understanding.",
      "code": "LC_PAC_O"
    }
  },
  {
    "id": 10,
    "category_name": "Learning Environment",
    "category_id": 3,
    "short_measure": "Support",
    "meaning": "Getting Help",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "I get help when I don’t understand.",
      "code": "LC_SUP_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Hard to get help"
            },
            {
              "id": 2,
              "value": "Questions not answered"
            },
            {
              "id": 3,
              "value": "Explanations unclear"
            },
            {
              "id": 4,
              "value": "Help comes too late"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Help available sometimes"
            },
            {
              "id": 2,
              "value": "Limited question time"
            },
            {
              "id": 3,
              "value": "Explanations sometimes unclear"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Usually get help"
            },
            {
              "id": 2,
              "value": "Questions mostly answered"
            },
            {
              "id": 3,
              "value": "Explanations clear"
            },
            {
              "id": 4,
              "value": "Help when needed"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Easy to get help"
            },
            {
              "id": 2,
              "value": "Questions answered clearly"
            },
            {
              "id": 3,
              "value": "Helpful explanations"
            },
            {
              "id": 4,
              "value": "Support when needed"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Always able to get help"
            },
            {
              "id": 2,
              "value": "Clear explanations"
            },
            {
              "id": 3,
              "value": "Help given quickly"
            },
            {
              "id": 4,
              "value": "Support always available"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I provide timely support when students struggle.",
      "code": "LC_SUP_T"
    },
    "observer": {
      "question": "The teacher responds effectively to student difficulties.",
      "code": "LC_SUP_O"
    }
  },
  {
    "id": 11,
    "category_name": "Learning Environment",
    "category_id": 3,
    "short_measure": "Dialogue",
    "meaning": "Sharing Ideas",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "We explain our ideas and discuss them.",
      "code": "LC_DIA_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Few chances to share"
            },
            {
              "id": 2,
              "value": "Little discussion"
            },
            {
              "id": 3,
              "value": "Same students speak"
            },
            {
              "id": 4,
              "value": "Ideas not explored"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Some discussion"
            },
            {
              "id": 2,
              "value": "Only some students speak"
            },
            {
              "id": 3,
              "value": "Ideas partly explored"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Regular discussion"
            },
            {
              "id": 2,
              "value": "Many contribute"
            },
            {
              "id": 3,
              "value": "Ideas explored"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Frequent discussion"
            },
            {
              "id": 2,
              "value": "Most share ideas"
            },
            {
              "id": 3,
              "value": "Different views explored"
            },
            {
              "id": 4,
              "value": "Teacher builds on ideas"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Open discussion"
            },
            {
              "id": 2,
              "value": "Everyone encouraged"
            },
            {
              "id": 3,
              "value": "Different views respected"
            },
            {
              "id": 4,
              "value": "Teacher deepens thinking"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I use questioning and discussion to deepen thinking.",
      "code": "LC_DIA_T"
    },
    "observer": {
      "question": "Students explain their reasoning and engage in discussion.",
      "code": "LC_DIA_O"
    }
  },
  {
    "id": 12,
    "category_name": "Learning Environment",
    "category_id": 3,
    "short_measure": "Fairness",
    "meaning": "Being Treated Fairly",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "My teacher treats students fairly.",
      "code": "LC_RES_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Students treated differently"
            },
            {
              "id": 2,
              "value": "Some students treated better than others"
            },
            {
              "id": 3,
              "value": "Decisions not explained"
            },
            {
              "id": 4,
              "value": "Respect inconsistent"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Students sometimes treated differently"
            },
            {
              "id": 2,
              "value": "Decisions sometimes explained"
            },
            {
              "id": 3,
              "value": "Respect not always consistent"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Students treated mostly equally"
            },
            {
              "id": 2,
              "value": "Decisions usually explained"
            },
            {
              "id": 3,
              "value": "Mostly respectful"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Students treated equally"
            },
            {
              "id": 2,
              "value": "Decisions clearly explained"
            },
            {
              "id": 3,
              "value": "Respectful classroom"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Everyone treated equally"
            },
            {
              "id": 2,
              "value": "Decisions fair and explained"
            },
            {
              "id": 3,
              "value": "Strong culture of respect"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I treat students fairly and respectfully.",
      "code": "LC_RES_T"
    },
    "observer": {
      "question": "Interactions are respectful and equitable.",
      "code": "LC_RES_O"
    }
  },
  {
    "id": 13,
    "category_name": "Learning Environment",
    "category_id": 3,
    "short_measure": "Inclusion",
    "meaning": "Belonging",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "I feel included in this class.",
      "code": "LC_INC_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Often feel left out"
            },
            {
              "id": 2,
              "value": "Hard to feel part of the class"
            },
            {
              "id": 3,
              "value": "Not included"
            },
            {
              "id": 4,
              "value": "Few chances to share"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Sometimes feel left out"
            },
            {
              "id": 2,
              "value": "Not always part of the group"
            },
            {
              "id": 3,
              "value": "Limited chances to share"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Usually feel included"
            },
            {
              "id": 2,
              "value": "Part of the group"
            },
            {
              "id": 3,
              "value": "Comfortable sharing ideas"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Feel included"
            },
            {
              "id": 2,
              "value": "Accepted in class"
            },
            {
              "id": 3,
              "value": "Opportunities to contribute"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Strong sense of belonging"
            },
            {
              "id": 2,
              "value": "Everyone included"
            },
            {
              "id": 3,
              "value": "Ideas welcomed"
            },
            {
              "id": 4,
              "value": "Confident being myself"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I ensure all students feel included.",
      "code": "LC_INC_T"
    },
    "observer": {
      "question": "Classroom culture promotes belonging and participation.",
      "code": "LC_INC_O"
    }
  },
  {
    "id": 14,
    "category_name": "Learning Environment",
    "category_id": 3,
    "short_measure": "Behaviour",
    "meaning": "Classroom Environment",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "Rules are clear and fair.",
      "code": "LC_BEH_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Rules unclear"
            },
            {
              "id": 2,
              "value": "Expectations change"
            },
            {
              "id": 3,
              "value": "Consequences unpredictable"
            },
            {
              "id": 4,
              "value": "Hard to know what happens"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Some rules unclear"
            },
            {
              "id": 2,
              "value": "Expectations inconsistent"
            },
            {
              "id": 3,
              "value": "Consequences vary"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Rules mostly clear"
            },
            {
              "id": 2,
              "value": "Expectations usually consistent"
            },
            {
              "id": 3,
              "value": "Consequences mostly consistent"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Clear rules"
            },
            {
              "id": 2,
              "value": "Expectations consistent"
            },
            {
              "id": 3,
              "value": "Fair consequences"
            },
            {
              "id": 4,
              "value": "Calm learning environment"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Very clear rules"
            },
            {
              "id": 2,
              "value": "Expectations always consistent"
            },
            {
              "id": 3,
              "value": "Consequences predictable"
            },
            {
              "id": 4,
              "value": "Calm and focused classroom"
            }
          ]
        }
      ]
    },
    "teacher": {
      "question": "I set and maintain clear behaviour expectations.",
      "code": "LC_BEH_T"
    },
    "observer": {
      "question": "Behaviour expectations are clear and consistently applied.",
      "code": "LC_BEH_O"
    }
  },
  {
    "id": 15,
    "category_name": "Open",
    "category_id": 4,
    "short_measure": "Strengths",
    "meaning": "What’s Working",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "What is your teacher doing well?",
      "code": "OP_STR_S",
      "star_based_review": null
    },
    "teacher": {
      "question": "What is working well?",
      "code": "OP_STR_T"
    },
    "observer": {
      "question": "What strengths were observed?",
      "code": "OP_STR_O"
    }
  },
  {
    "id": 16,
    "category_name": "Open",
    "category_id": 4,
    "short_measure": "Improvement",
    "meaning": "What Could Be Better",
    "has_student_question": true,
    "has_teacher_question": true,
    "has_observer_question": true,
    "student": {
      "question": "What could be improved?",
      "code": "OP_NS_S",
      "star_based_review": null
    },
    "teacher": {
      "question": "What could improve your teaching?",
      "code": "OP_NS_T"
    },
    "observer": {
      "question": "What are the improvement priorities?",
      "code": "OP_NS_O"
    }
  },
  {
    "id": 17,
    "category_name": "Professional Practice",
    "category_id": 5,
    "short_measure": "Lesson Coherence",
    "meaning": "n-a",
    "has_student_question": false,
    "has_teacher_question": true,
    "has_observer_question": true,
    "teacher": {
      "question": "My lesson goals, learinng activities, and assessments are clearly aligned.",
      "code": "PP_ALI_T"
    },
    "observer": {
      "question": "Goals, learning activities, and assessments are aligned and coherent.",
      "code": "PP_ALI_T"
    }
  },
  {
    "id": 18,
    "category_name": "Professional Practice",
    "category_id": 5,
    "short_measure": "Meaningful Assessment",
    "meaning": "n-a",
    "has_student_question": false,
    "has_teacher_question": true,
    "has_observer_question": true,
    "teacher": {
      "question": "My assessments accurately measure the intended learning.",
      "code": "PP_ASD_T"
    },
    "observer": {
      "question": "Assessments match the learning goals and measure understanding effectively.",
      "code": "PP_ASD_T"
    }
  },
  {
    "id": 19,
    "category_name": "Professional Practice",
    "category_id": 5,
    "short_measure": "Adaptive Teaching",
    "meaning": "n-a",
    "has_student_question": false,
    "has_teacher_question": true,
    "has_observer_question": true,
    "teacher": {
      "question": "I adjust teaching based on student understanding.",
      "code": "PP_RES_T"
    },
    "observer": {
      "question": "Instruction is adjusted based on student responses.",
      "code": "PP_RES_T"
    }
  },
  {
    "id": 20,
    "category_name": "Professional Practice",
    "category_id": 5,
    "short_measure": "Ongoing Improvement",
    "meaning": "n-a",
    "has_student_question": false,
    "has_teacher_question": true,
    "has_observer_question": true,
    "teacher": {
      "question": "I reflect on my teaching and identify specific improvements.",
      "code": "PP_REF_T"
    },
    "observer": {
      "question": "Teacher reflects thoughtfully and identifies clear next steps.",
      "code": "PP_REF_T"
    }
  },
  {
    "id": 21,
    "category_name": "Learning Impact",
    "category_id": 6,
    "short_measure": "Understanding",
    "meaning": "Understanding the Lesson",
    "has_student_question": true,
    "has_teacher_question": false,
    "has_observer_question": false,
    "student": {
      "question": "I understand what we are learning in this class.",
      "code": "AL_UND_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Often confused"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Sometimes confused"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Understand some parts"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Mostly understand"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Understand very well"
            }
          ]
        }
      ]
    }
  },
  {
    "id": 22,
    "category_name": "Learning Impact",
    "category_id": 6,
    "short_measure": "Progress",
    "meaning": "Getting Better",
    "has_student_question": true,
    "has_teacher_question": false,
    "has_observer_question": false,
    "student": {
      "question": "I feel like I am getting better in this subject.",
      "code": "AL_PRO_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Not improving"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Improving slowly"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Some improvement"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Clearly improving"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Improving a lot"
            }
          ]
        }
      ]
    }
  },
  {
    "id": 23,
    "category_name": "Learning Impact",
    "category_id": 6,
    "short_measure": "Confidence",
    "meaning": "Feeling Confident",
    "has_student_question": true,
    "has_teacher_question": false,
    "has_observer_question": false,
    "student": {
      "question": "I feel confident I can succeed in this class.",
      "code": "AL_CONF_S",
      "star_based_review": [
        {
          "id": 1,
          "number_of_stars": 1,
          "tag": [
            {
              "id": 1,
              "value": "Not confident"
            }
          ]
        },
        {
          "id": 2,
          "number_of_stars": 2,
          "tag": [
            {
              "id": 1,
              "value": "Low confidence"
            }
          ]
        },
        {
          "id": 3,
          "number_of_stars": 3,
          "tag": [
            {
              "id": 1,
              "value": "Sometimes confident"
            }
          ]
        },
        {
          "id": 4,
          "number_of_stars": 4,
          "tag": [
            {
              "id": 1,
              "value": "Mostly confident"
            }
          ]
        },
        {
          "id": 5,
          "number_of_stars": 5,
          "tag": [
            {
              "id": 1,
              "value": "Very confident"
            }
          ]
        }
      ]
    }
  }
]