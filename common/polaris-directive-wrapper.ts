import { SchemaDirectiveVisitor } from 'graphql-tools';
class PolarisDirectiveWrapper {
    constructor(readonly directiveName: string, readonly directiveClass: any) {}

    public toDirective(): {
        [name: string]: typeof SchemaDirectiveVisitor;
    } {
        return { [this.directiveName]: this.directiveClass };
    }
}
export = PolarisDirectiveWrapper;
