import React from "react";

interface ShareButtonsProps {
    title: string;
    url: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({title, url}) =>
    <div>Share Buttons: {url},{title}</div>;

