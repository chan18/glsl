#ifdef GL_ES
precision mediump float;
#endif

/*
    outputs just a pixel color
*/
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    // vec2 x and y component
    vec2 uv = fragCoord/iResolution.xy;

    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));

    // Output to screen
    // fragment color.
    // pixel color consists of R G B 
    // values range from 0 and 1
    // forth component called alpha channel.
    // 
    // fragColor = vec4(col,1.0);
    fragColor = vec4(uv.x,uv.y,0.,1.0);
}