import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, text, primary, pink, className, children, ...props }) {
    let Comp = 'button';

    const listProps = {
        ...props,
    };

    const classes = cx('wrapper', {
        [className]: className,
        text,
        primary,
        pink,
    });

    if (to) {
        listProps.to = to;
        Comp = Link;
    } else if (href) {
        listProps.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...listProps}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
