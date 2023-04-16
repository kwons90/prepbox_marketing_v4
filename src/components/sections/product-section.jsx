import ReactPlayer from 'react-player';
import classes from './product-section.module.css';

const ProductSection = () => {
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <h2>Our product in action</h2>

                <div className={classes.content}>
                    <ReactPlayer
                        url='https://www.youtube.com/embed/eIxCSFL9Am4'
                        width='100%'
                        height='100%'
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
