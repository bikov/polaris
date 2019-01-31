import { GraphQLResolveInfo } from 'graphql';
import { PolarisContext } from '../server/polaris-context';
import { PolarisMiddleware } from './polaris-middleware';

export const createMiddleware = <TContext extends PolarisContext = PolarisContext>(
    middleware: PolarisMiddleware<TContext>,
) => {
    return async (
        resolve: (
            root: any,
            args: { [argName: string]: any },
            context: TContext,
            info: GraphQLResolveInfo,
        ) => string,
        root: any,
        args: { [argName: string]: any },
        context: TContext,
        info: GraphQLResolveInfo,
    ) => {
        middleware.preResolve({ root, args, context, info });
        const result = await resolve(root, args, context, info);
        middleware.postResolve({ root, args, context, info, result });
        return result;
    };
};