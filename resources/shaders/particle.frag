#version 330

in float out_life;
in vec4 out_position;
in vec2 out_texCoords;

uniform vec4 u_bornColor;
uniform vec4 u_deadColor;
uniform float u_max_life;
uniform sampler2D u_texture; // If we're using a texture

out vec4 fragColor;


void main()
{
    if(out_life == -1.0f){
        discard;
    }
//    float r = clamp(10*out_position.z, 0.f, 1.f);
//    float g = clamp(10*out_position.y, 0.f, 1.f);
//    float b = clamp(10*out_position.x, 0.f, 1.f);
//    vec4 positionColor = vec4(r,g,b,1.f);

    vec4 particleColor = u_bornColor*(out_life/u_max_life) + 1.0*u_deadColor*(1.0f-out_life/u_max_life);
//    vec4 particleColor = positionColor*(out_life/u_max_life) + 1.0*vec4(1.0f,1.0f,1.0f,1.0f)*(1.0f-out_life/u_max_life);


    vec4 textureColor = texture(u_texture, out_texCoords);
    if (textureColor.a < 0.1)
        discard;

    float blendFactor = 0.5;
    fragColor = mix(particleColor, textureColor, blendFactor);
    //fragColor = particleColor;
//    float r = clamp(out_position.x, 0.f, 1.f);
//    float g = clamp(out_position.z, 0.f, 1.f);
//    float b = clamp(out_position.y, 0.f, 1.f);

//    fragColor = fragColor + 0.5*vec4(r,g,b,1.f);
//    fragColor.a = 0.f;

//    fragColor = vec4(1.0f,1.0f,1.0f,1.0f);
}



