#ifdef GL_ES
precision mediump float;
#endif

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord.xy/iResolution.xy;

    uv -= .5; 
    // aspect ration of scren 
    uv.x *= iResolution.x/iResolution.y;

    float d = length(uv);
    float r = 0.3;

    float c = smoothstep(r, r-0.02, d);

    //if( d < .3) c = 1.; else 0.;

    fragColor = vec4(vec3(c), 1.0);
}

