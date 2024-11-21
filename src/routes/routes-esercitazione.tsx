
import { LayoutEsercitazione } from "../app2/components/layout/layout";
import { LoginEsercitazione } from "../app2/pages/login/login";

export const routesEsercitazione = [
    {
        element: <LayoutEsercitazione/>,
        children: [
            {
                path: '/',
                children: [
                    {
                        path: '',
                        element: <LoginEsercitazione/>,
                    },
                    /*{
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
                        element: <LoginEsercitazione/>
                        
                    }*/
                ]
            },


        ]
    },
    {
        path: '*',
        element: <h1>Pagina non trovata</h1>
    }
];