export async function GET(request: Request, response: Response) {
    const schema = {
        cpf: {
            title: "CPF",
            label: "Digite seu CPF",
            type: {
                name: "string",
                message: "O CPF deve ser uma string",
            },
            minLength: {
                value: 1,
                message: "O CPF deve ter 11 dígitos",
            },
            maxLength: {
                value: 11,
                message: "O CPF deve ter 11 dígitos",
            },
            required: true,
            regex: "^[0-9]{11}$",
        },
        cnpj: {
            title: "CNPJ",
            label: "Digite seu CNPJ",
            type: {
                name: "string",
                message: "O CNPJ deve ser uma string",
            },
            minLength: {
                value: 14,
                message: "O CNPJ deve ter 14 dígitos",
            },
            maxLength: {
                value: 14,
                message: "O CNPJ deve ter 14 dígitos",
            },
            required: true,
            regex: "^[0-9]{14}$",
        },
        telefone: {
            title: "Telefone",
            label: "Digite seu telefone",
            type: {
                name: "string",
                message: "O telefone deve ser uma string",
            },
            minLength: {
                value: 10,
                message: "O telefone deve ter pelo menos 10 dígitos",
            },
            maxLength: {
                value: 11,
                message: "O telefone deve ter no máximo 11 dígitos",
            },
            required: true,
            regex: "^[0-9]{10,11}$",
        },
        ultimos4RG: {
            title: "4 Últimos Dígitos do RG",
            label: "Digite os 4 últimos dígitos do seu RG",
            type: {
                name: "number",
                message: "O RG deve conter apenas números",
            },
            minLength: {
                value: 4,
                message: "Informe os 4 últimos dígitos do RG",
            },
            maxLength: {
                value: 4,
                message: "Informe os 4 últimos dígitos do RG",
            },
            required: true,
            regex: "^[0-9]{4}$",
        },
        primeiros4RG: {
            title: "4 Primeiros Dígitos do RG",
            label: "Digite os 4 primeiros dígitos do seu RG",
            type: {
                name: "number",
                message: "O RG deve conter apenas números",
            },
            minLength: {
                value: 4,
                message: "Informe os 4 primeiros dígitos do RG",
            },
            maxLength: {
                value: 4,
                message: "Informe os 4 primeiros dígitos do RG",
            },
            required: true,
            regex: "^[0-9]{4}$",
        },
    };

    const schema2 = {
        type: "object",
        properties: {
            hello: {
                type: "string",
            },
        },
    };

    return Response.json({ ...schema });
}
