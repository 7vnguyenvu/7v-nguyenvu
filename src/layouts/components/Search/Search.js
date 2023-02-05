import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchService from '../../../services/searchService';
import styles from './Search.module.scss';
import FreindItem from '../../../components/FriendsItem';
import { useDebounce } from '../../../hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const debouncedValue = useDebounce(searchValue, 300);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchService.search(debouncedValue);
            setSearchResult(result);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClear_Search = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleFocus_Search = () => {
        setShowResult(true);
    };

    const handleOnChange_Search = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    const handleSubmit_Search = (e) => {};

    return (
        <div>
            <HeadlessTippy
                interactive
                placement="bottom"
                // appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('result')} tabIndex="-1" {...attrs} onClick={handleHideResult}>
                        {searchResult.map((result) => (
                            <FreindItem key={result.id} data={result} />
                        ))}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        placeholder="Search friends..."
                        spellCheck={false}
                        onChange={handleOnChange_Search}
                        onKeyUp={() => console.log('key up')}
                        onFocus={handleFocus_Search}
                    />

                    {!!searchValue && (
                        <button className={cx('clear-btn')} onClick={handleClear_Search}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    <button
                        className={cx('search-btn')}
                        onClick={handleSubmit_Search}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
