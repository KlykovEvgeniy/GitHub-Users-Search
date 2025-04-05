import { Formik, Form, Field } from "formik"
import { ReactComponent as SeacrhIcon } from "assets/icon-search.svg";
import './SearchUser.styled.scss';

interface SearchUserProps {
    onClick: (user: string) => void,
}

interface Initial {
    name: ''
}

interface Actios {
    resetForm: () => void
}

export const SeacrhUser = function ({ onClick }: SearchUserProps) {
    const initialValues: Initial = {
        name: ''
    }

    const handleSubmit = ({name}: Initial, actions: Actios) => {
        if(name.trim() === ''){
            return;
        }
        onClick(name)
        actions.resetForm()
    }

    return (
        <section className="search">
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form className="search__form">
                    <SeacrhIcon />
                    <Field className='search__input' type='text' name='name' placeholder='Search GitHub username...' />
                    <button type="submit" className="search__button">Seacrh</button>
                </Form>
            </Formik>
        </section>
    )
}