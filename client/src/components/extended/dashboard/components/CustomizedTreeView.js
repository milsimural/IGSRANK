import * as React from 'react';
import clsx from 'clsx';
import { animated, useSpring } from '@react-spring/web';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { unstable_useTreeItem2 as useTreeItem2 } from '@mui/x-tree-view/useTreeItem2';
import { TreeItem2Content, TreeItem2IconContainer, TreeItem2Label, TreeItem2Root, } from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { useTheme } from '@mui/material/styles';
const ITEMS = [
    {
        id: '1',
        label: 'Website',
        children: [
            { id: '1.1', label: 'Home', color: 'green' },
            { id: '1.2', label: 'Pricing', color: 'green' },
            { id: '1.3', label: 'About us', color: 'green' },
            {
                id: '1.4',
                label: 'Blog',
                children: [
                    { id: '1.1.1', label: 'Announcements', color: 'blue' },
                    { id: '1.1.2', label: 'April lookahead', color: 'blue' },
                    { id: '1.1.3', label: "What's new", color: 'blue' },
                    { id: '1.1.4', label: 'Meet the team', color: 'blue' },
                ],
            },
        ],
    },
    {
        id: '2',
        label: 'Store',
        children: [
            { id: '2.1', label: 'All products', color: 'green' },
            {
                id: '2.2',
                label: 'Categories',
                children: [
                    { id: '2.2.1', label: 'Gadgets', color: 'blue' },
                    { id: '2.2.2', label: 'Phones', color: 'blue' },
                    { id: '2.2.3', label: 'Wearables', color: 'blue' },
                ],
            },
            { id: '2.3', label: 'Bestsellers', color: 'green' },
            { id: '2.4', label: 'Sales', color: 'green' },
        ],
    },
    { id: '4', label: 'Contact', color: 'blue' },
    { id: '5', label: 'Help', color: 'blue' },
];
function DotIcon({ color }) {
    return (React.createElement(Box, { sx: { marginRight: 1, display: 'flex', alignItems: 'center' } },
        React.createElement("svg", { width: 6, height: 6 },
            React.createElement("circle", { cx: 3, cy: 3, r: 3, fill: color }))));
}
const AnimatedCollapse = animated(Collapse);
function TransitionComponent(props) {
    const style = useSpring({
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
        },
    });
    return React.createElement(AnimatedCollapse, { style: style, ...props });
}
function CustomLabel({ color, expandable, children, ...other }) {
    const theme = useTheme();
    const colors = {
        blue: theme.palette.primary.main,
        green: theme.palette.success.main,
    };
    const iconColor = color ? colors[color] : null;
    return (React.createElement(TreeItem2Label, { ...other, sx: { display: 'flex', alignItems: 'center' } },
        iconColor && React.createElement(DotIcon, { color: iconColor }),
        React.createElement(Typography, { className: "labelText", variant: "body2", sx: { color: 'text.primary' } }, children)));
}
const CustomTreeItem = React.forwardRef((props, ref) => {
    const { id, itemId, label, disabled, children, ...other } = props;
    const { getRootProps, getContentProps, getIconContainerProps, getLabelProps, getGroupTransitionProps, status, publicAPI, } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });
    const item = publicAPI.getItem(itemId);
    const color = item?.color;
    return (React.createElement(TreeItem2Provider, { itemId: itemId },
        React.createElement(TreeItem2Root, { ...getRootProps(other) },
            React.createElement(TreeItem2Content, { ...getContentProps({
                    className: clsx('content', {
                        expanded: status.expanded,
                        selected: status.selected,
                        focused: status.focused,
                        disabled: status.disabled,
                    }),
                }) },
                status.expandable && (React.createElement(TreeItem2IconContainer, { ...getIconContainerProps() },
                    React.createElement(TreeItem2Icon, { status: status }))),
                React.createElement(CustomLabel, { ...getLabelProps({ color }) })),
            children && (React.createElement(TransitionComponent, { ...getGroupTransitionProps({ className: 'groupTransition' }) })))));
});
export default function CustomizedTreeView() {
    return (React.createElement(Card, { variant: "outlined", sx: { display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 } },
        React.createElement(CardContent, null,
            React.createElement(Typography, { component: "h2", variant: "subtitle2" }, "Product tree"),
            React.createElement(RichTreeView, { items: ITEMS, "aria-label": "pages", multiSelect: true, defaultExpandedItems: ['1', '1.1'], defaultSelectedItems: ['1.1', '1.1.1'], sx: {
                    m: '0 -8px',
                    pb: '8px',
                    height: 'fit-content',
                    flexGrow: 1,
                    overflowY: 'auto',
                }, slots: { item: CustomTreeItem } }))));
}
