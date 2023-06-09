import { SignIn } from '@clerk/nextjs'
import { useEffect } from 'react'

const SignInPage = () => {
    useEffect(() => {
        document.querySelector('.cl-internal-b3fm6y')?.remove()
    }, [])

    return (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <SignIn
                path="/sign-in"
                routing="path"
                signUpUrl="/sign-up"
                appearance={{
                    elements: {
                        formButtonPrimary: 'bg-light text-black border hover:bg-light-hover text-sm normal-case',
                        footerActionLink:
                            'text-black hover:no-underline transition hover:text-black opacity-70 hover:opacity-100',
                        logoBox: 'justify-center h-12',
                        formFieldAction:
                            'text-black hover:no-underline transition hover:text-black opacity-70 hover:opacity-100',
                        identityPreviewEditButton:
                            'text-black hover:no-underline transition hover:text-black opacity-70 hover:opacity-100',
                    },
                }}
            />
        </div>
    )
}

export default SignInPage
