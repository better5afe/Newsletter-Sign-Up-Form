export interface ButtonProps {
    type: 'submit' | 'button',
    text: string,
    onClick?: () => void
}