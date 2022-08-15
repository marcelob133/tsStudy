function showError(message : string): never{
    throw new Error(message);
}

showError('Algo deu errado!')