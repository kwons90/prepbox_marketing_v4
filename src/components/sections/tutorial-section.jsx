import { useState } from 'react';

import { ReactComponent as Arrow } from './../../assets/icons/accordion-arrow.svg';
import BookAssessment from './../../assets/gifs/booking.gif';
import Login from './../../assets/gifs/login.gif';
import Lecture from './../../assets/gifs/lectures.gif';
import Solving from './../../assets/gifs/solving.gif';
import Submitting from './../../assets/gifs/submitting.gif';

import classes from './tutorial-section.module.css';

const guidance = [
    {
        id: '01',
        title: 'Book Free Assessment',
        description: [
            'Our dashboard gives you an overview of your progress towards conquering your math curriculum',
            `"It's very encouraging to log in and see how far you've come since starting the program. It gets me excited each session."`,
        ],
        image: BookAssessment,
    },
    {
        id: '02',
        title: 'Login to your account',
        description: [
            'Take an assessment with our exprienced tutor to understand where you are for your grade and identify weaknesses',
            `"I really felt like the tutor understood exactly what I needed to do to improve my grades after the assessment"`,
        ],
        image: Login,
    },
    {
        id: '03',
        title: 'Watch mini-lectures',
        description: [
            'This is our "learning" part: our lectures are designed to deliver exactly the lectures you need to understand before each problem set',
            `"I love how short and sweet the lectures are. I don't get bored and can dive into questions to apply the concepts right away."`,
        ],
        image: Lecture,
    },
    {
        id: '04',
        title: 'Begin solving questionst',
        description: [
            'This is our "doing" part: students begin applying concepts immediately after our lecture videos.',
            `"It's not like other programs where I have to submit before seeking help. Hint videos and similar questions give me the tools I need to solve the questions!"`,
        ],
        image: Solving,
    },
    {
        id: '05',
        title: 'Submit and get marked real-time',
        description: [
            'Our tutors and A.I. mark the the submissions within minutes of submission. Solutions without proper work are marked wrong to encourage good habits.',
            `"I love that I don't have to wait overnight to get marked. Solution videos are a plus that helps me learn faster!"`,
        ],
        image: Submitting,
    },
];

const TutorailSection = () => {
    const [accordion, setAccordion] = useState(0);

    const accordionHandler = (index) => {
        setAccordion(index);
    };

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <p>
                        We are strong believers that the application of theory in the form of
                        problem solving is as equally important as theory in learning. Our product
                        reflects these values.
                    </p>
                </div>
                <h2 className={classes.title}>How does it work?</h2>
            </div>

            <div className={classes.content}>
                <div className={classes['content__wrapper-content']}>
                    <ul className={classes.list}>
                        {guidance.map((guide, i) => {
                            return (
                                <li
                                    key={guide.id}
                                    className={`${classes['list__item']} ${
                                        accordion === i ? `${classes.active}` : ''
                                    }`}
                                >
                                    <div
                                        className={classes['list__item-header']}
                                        onClick={accordionHandler.bind(null, i)}
                                    >
                                        <div className={classes['list__item-count']}>
                                            {guide.id}.
                                        </div>
                                        <h4>{guide.title}</h4>
                                        <button
                                            type='button'
                                            className={`${classes['list__item-btn']} ${
                                                accordion === i ? `${classes.show}` : ''
                                            }`}
                                        >
                                            <Arrow />
                                        </button>
                                    </div>

                                    <div
                                        className={`${classes['list__item-content']} ${
                                            accordion === i ? `${classes.active}` : ''
                                        }`}
                                    >
                                        {guide.description.map((desc, i) => (
                                            <p key={i}>{desc}</p>
                                        ))}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={classes['content__wrapper-image']}>
                    {guidance.map((guide) => {
                        return (
                            <div
                                key={guide.id}
                                className={classes['content__gify']}
                                style={{ transform: `translateY(-${accordion}00%)` }}
                            >
                                <img src={guide.image} alt={guide.title} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TutorailSection;
