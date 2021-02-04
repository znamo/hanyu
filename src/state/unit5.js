'use strict';
const gen = (characters, pinyin, meaning, type) => ({characters, pinyin, meaning, type});
const unit5 = [
    ...gen('父母亲','fùmǔqīn', 'parents'),
    ...gen('房间','fángjiān', 'room'),
    ...gen('借', 'jiè', 'borrow; lend'),
    ...gen('拿','ná',	'hold; take; bring'),
    ...gen('参观','cānguān', 'visit; look around'),
    ...gen('新', 'xīn', 'new'),
    ...gen('先', 'xiān', 'first'),
    ...gen('第', 'dì',''),
    ...gen('次','cì',''),
    ...gen('政治', 'zhèngzhì', 'politics'),
    ...gen('经济','jīngjì',  'economy'),
    ...gen('历史', 'lìshǐ', 'history'),
    ...gen('文化', 'wénhuà',  'culture'),
    ...gen('国家',  'guójiā',  'country'),
    ...gen('博物馆',  'bówùguǎn',    'museum'),
    ...gen('中国通',   'Zhōngguótōng',''),
    ...gen('对...感兴趣/有兴趣', 'duì…gǎnxìngqù/xìngqù', 'be interested')
];

export default unit5;