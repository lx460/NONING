package com.fivenonjangi.noning.data.dto.user;

import com.fivenonjangi.noning.data.entity.user.Follow;
import lombok.*;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class FollowDTO {
    private long id;
    private UserDTO fromUser;
    private UserDTO toUser;

    public Follow toEntity(){
        return Follow.builder()
                .id(id)
                .fromUser(fromUser.toEntity())
                .toUser(toUser.toEntity())
                .build();
    }
}