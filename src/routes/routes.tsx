import { Cronomentro } from "../app/components/cronomentro/cronometro";
import { Layout } from "../app/components/layout/layout";
import { TodDoDetail } from "../app/components/todoDetail/todoDetail";
import { TodoForm } from "../app/components/todoForm/todoForm";
import { TodoList } from "../app/components/todoList/todoList";
import { Login } from "../app/pages/login";

export const routes = [
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                children: [
                    {
                        path: '',
                        element: <TodoList/>,
                    },
                    {
                        path: 'nuovo',
                        element: <TodoForm/>,
                    },
                    {
                        path: 'list',
                        children: [
                            {
                                path: '',
                                element: <TodoList/>
                            },
                            {
                                path: 'dettaglio/:id',
                                element: <TodDoDetail/>
                            }
                        ]
                    },
                    {
                        path: 'timer',
                        element: <Cronomentro/>
                    },
                    {
                        path: 'login',
                        element: <Login/>
                        
                    }
                ]
            },


        ]
    },
    {
        path: '*',
        element: <h1>Pagina non trovata</h1>
    }
];