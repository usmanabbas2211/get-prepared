export interface IHelper {
    res: any
    code: number
    data?: any
    message?: string
    error?: any
}

export const ok = ({ res, code, data }: IHelper) => {
    return res.status(code | 200).json({
        success: true,
        data,
    })
}

export const bad_request = ({ res, message }: IHelper) => {
    return res.status(400).json({
        success: false,
        message,
    })
}

export const server_error = ({ res, error }: IHelper) => {
    console.log('error=>', error)
    return res.status(500).json({
        success: false,
        error,
    })
}
