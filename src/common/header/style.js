import style from 'styled-components';
import logo from '../../logo.svg';

const HeaderWrapper = style.nav`
    height:56px;
    background-color: #fff;
    position:fixed;
    top:0;
    width:100%;
    border-bottom: #f0f0f0 solid 1px;

`;
const Logo = style.a.attrs({
  href: '/',
})`
    position:absolute;
    left:0;
    height:100%;
    width:80px;
    background:url(${logo});
`;
const Container = style.div`
    width:960px;
    height:100%;
    margin:0 auto;
`;
const ContainerItem = style.div`
    line-height:56px;
    padding:0 15px;
    margin-right:10px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;
const colorF = '#fff';
const colorG = '#969696';
const SearchWrapper = style.div`
    
    float:left;
    position:relative;
    .slide-enter{
        width:240px;
        transition: width .5s ease .1s;
    }
    .slide-enter-active{
        width:320px;
    }
    .slide-exit {
        transition: width .5s ease .1s;
    }
    .slide-exit-active{
        width:240px;
    }
    .iconfont {
        margin-left:-26px;
        border-radius:50%;
        vertical-align: middle;
        color:${colorG};
        &.focused {
            border:8px solid ${colorG};
            background:${colorG};
            color:${colorF};
            margin-left:-36px;
        }
    }
`;

const NavSearch = style.input.attrs({
  placeholder: '搜索',
})`
    width:240px;
    height:38px;
    border:none;
    outline:none;
    padding:0 35px 0 20px;
    box-sizing:border-box;
    border-radius:19px;
    background:green;
    margin-top:9px;
    margin-left:20px
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused {
        width:320px;
    }
`;
const Addition = style.div`
    position:absolute;
    right: 40px;
    top: 0;
    height: 56px;
`;
const Button = style.div`
    float:right;
    margin-top:9px;
    margin-right:20px
    padding:0 23px;
    line-height:38px;
    border-radius:19px;
    border: 1px solid #ec6149;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;
export {
  HeaderWrapper, Logo, Container, ContainerItem, NavSearch, Addition, Button, SearchWrapper,
};
