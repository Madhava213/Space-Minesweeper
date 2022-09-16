import * as gfx from 'gophergfx'

export class Heart extends gfx.ShapeInstance
{
    private breaking: boolean;
    private breakAlpha: number;

    constructor(baseShape: gfx.Shape, copyTransform = true)
    {
        super(baseShape, copyTransform);

        this.material = new gfx.Material2();
        this.material.copy(baseShape.material);

        this.breaking = false;
        this.breakAlpha = 0;
    }

    update(deltaTime: number)
    {
        const breakTime = .25;

        if(this.breaking)
        {
            this.breakAlpha += deltaTime / breakTime;
            this.material.color.set( (1 - this.breakAlpha), (1 - this.breakAlpha),1, 1);

            if(this.breakAlpha >= 1.0)
            {
                this.remove();
            }
        }
    }

    break(): void
    {
        this.breaking = true;
    }

    isBreaking(): boolean
    {
        return this.breaking;
    }
}