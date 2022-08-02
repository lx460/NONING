package com.fivenonjangi.noning.data.repository.etc;

import com.fivenonjangi.noning.data.entity.etc.CommonCode;
import lombok.*;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class CommonCodeDTO {
    private String codeId;
    private String upperCodeId;
    private String value;

    public CommonCode toEntity(){
        return CommonCode.builder()
                .codeId(codeId)
                .upperCodeId(upperCodeId)
                .value(value)
                .build();
    }
}
