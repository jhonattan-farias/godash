import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
    icon: ElementType;
    children: string
    href: string;
}

export function NavLink({ icon, children, href ,...rest }: NavLinkProps){
    return (
        <ActiveLink
            href={href}
            passHref
        >
            <ChakraLink
                {...rest}
                display='flex'
                alignItems='center'
            >
                <Icon 
                    as={icon} 
                    fontSize='20'
                />
                <Text
                    fontWeight='medium'
                    ml='4'
                >
                {children}
                </Text>
            </ChakraLink>
        </ActiveLink>
    )
}