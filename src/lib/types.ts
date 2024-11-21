export type TodoItem ={
    id: number;
    title: string;
    completed: boolean;
    completeEventButton?: any;//Tipizzare (id?: number) => void;
    deleteEventButton?: any;
}

export type CustomButtonProps = {
    children: React.ReactNode; // meglio di React.Element perché accetta tutto  non solo jsx
    type: 'submit' | 'reset' | 'button';
    clickHandler?: () => void; //non ne ho sempre bisogno
    className?: string;

}